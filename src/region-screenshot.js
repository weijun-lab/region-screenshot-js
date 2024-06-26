import "../assets/index.scss";
import $ from "jquery";
import domToImage from "dom-to-image";
class Base {
  constructor() {
    this.regionDraggingCallback = [];
    this.regionDragStartCallback = [];
    this.regionDragEndCallback = [];
    this.screenshotGeneratedCallback = [];
    this.toolsCanvasCreatedCallback = [];
    this.closedCallback = [];
    this.successCreatedCallback = [];
    this.errorCreatedCallback = [];
    this.screenshotDownloadCallback = [];
  }

  getMouseRelativeXy({ clientX, clientY }) {
    let { left, top } = this.canvas.getBoundingClientRect();
    let mouseRelativeX = clientX - left;
    let mouseRelativeY = clientY - top;
    return {
      x: mouseRelativeX,
      y: mouseRelativeY,
    };
  }
  triggerEvent(listener, params) {
    listener.forEach((item) => {
      item(params);
    });
  }
  on(eventName, callback) {
    switch (eventName) {
      case "regionDragging":
        this.regionDraggingCallback.push(callback);
        break;
      case "regionDragStart":
        this.regionDragStartCallback.push(callback);
        break;
      case "regionDragEnd":
        this.regionDragEndCallback.push(callback);
        break;
      case "screenshotGenerated":
        this.screenshotGeneratedCallback.push(callback);
        break;
      case "toolsCanvasCreated":
        this.toolsCanvasCreatedCallback.push(callback);
        break;
      case "closed":
        this.closedCallback.push(callback);
        break;
      case "successCreated":
        this.successCreatedCallback.push(callback);
        break;
      case "errorCreated":
        this.errorCreatedCallback.push(callback);
        break;
      case "screenshotDownload":
        this.screenshotDownloadCallback.push(callback);
        break;
      default:
        break;
    }
  }
  off(eventName, callback) {
    switch (eventName) {
      case "regionDragging":
        this.regionDraggingCallback = this.regionDraggingCallback.filter(
          (item) => item !== callback
        );
        break;
      case "regionDragStart":
        this.regionDragStartCallback = this.regionDragStartCallback.filter(
          (item) => item !== callback
        );
        break;
      case "regionDragEnd":
        this.regionDragEndCallback = this.regionDragEndCallback.filter(
          (item) => item !== callback
        );
        break;
      case "screenshotGenerated":
        this.screenshotGeneratedCallback =
          this.screenshotGeneratedCallback.filter((item) => item !== callback);
        break;
      case "toolsCanvasCreated":
        this.toolsCanvasCreatedCallback =
          this.toolsCanvasCreatedCallback.filter((item) => item !== callback);
        break;
      case "closed":
        this.closedCallback = this.closedCallback.filter(
          (item) => item !== callback
        );
        break;
      case "successCreated":
        this.successCreatedCallback = this.successCreatedCallback.filter(
          (item) => item !== callback
        );
        break;
      case "errorCreated":
        this.errorCreatedCallback = this.errorCreatedCallback.filter(
          (item) => item !== callback
        );
        break;
      case "screenshotDownload":
        this.screenshotDownloadCallback =
          this.screenshotDownloadCallback.filter((item) => item !== callback);
        break;
      default:
        break;
    }
  }
}
class SelectRegion extends Base {
  constructor(options = {}) {
    super(options);
    this.canvas = null;
    this.ctx = null;
    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = 0;
    this.regionColor = options.regionColor;
    this.screenshot = options.screenshot;
    this.initialRegion = options.initialRegion;
    let regionSizeIndicator = {
      show: true,
      color: "#ffffff",
      fontSize: 14,
    };
    this.regionSizeIndicator =
      options.regionSizeIndicator ?? regionSizeIndicator;
    this.regionSizeIndicator.show ??= regionSizeIndicator.show;
    this.regionSizeIndicator.color ??= regionSizeIndicator.color;
    this.regionSizeIndicator.fontSize ??= regionSizeIndicator.fontSize;
    this.maskColor = options.maskColor ?? "rgba(0, 0, 0, 0.5)";
  }
  init() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = innerWidth;
    this.canvas.height = innerHeight;

    this.canvas.style.cssText = `cursor:crosshair;position:fixed;top:0;left:0;z-index:9999`;

    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.ctx.drawImage(
      this.screenshot,
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
    this.ctx.fillStyle = this.maskColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.triggerEvent(this.successCreatedCallback);
    let that = this;
    if (this.initialRegion) {
      let { left, top, width, height } = this.initialRegion;
      let startX = Math.max(left, 0);
      let startY = Math.max(top, 0);
      let endX = Math.min(width + left, innerWidth);
      let endY = Math.min(height + top, innerHeight);
      let params = {
        startX,
        startY,
        endX,
        endY,
      };
      that.triggerEvent(that.regionDragStartCallback, params);
      that.setRegionSize(startX, startY, endX, endY);
      that.triggerEvent(that.regionDragEndCallback, params);
      this.allowDragRegion();
    } else {
      let isMouseDown = false;
      let isMouseMove = false;
      let isFirstMouseMove = true;
      let startX, startY, endX, endY;
      function mousemove(e) {
        isMouseMove = true;
        let { x, y } = that.getMouseRelativeXy(e);
        if (startX === undefined && startY === undefined) {
          startX = x;
          startY = y;
          endX = x;
          endY = y;
        } else {
          endX = x;
          endY = y;
        }
        endX = Math.min(endX, that.canvas.width);
        endY = Math.min(endY, that.canvas.height);
        endX = Math.max(endX, 0);
        endY = Math.max(endY, 0);
        if (isFirstMouseMove) {
          that.triggerEvent(that.regionDragStartCallback, {
            startX: startX,
            startY: startY,
            endX: endX,
            endY: endY,
          });
        }
        isFirstMouseMove = false;
        that.setRegionSize(startX, startY, endX, endY);
      }

      function mouseup() {
        if (isMouseDown) {
          document.removeEventListener("mousemove", mousemove);
          if (!isMouseMove) {
            //只是点了一下，鼠标没有选择区域
            return;
          }
          document.removeEventListener("mousemove", mousemove);
          document.removeEventListener("mouseup", mouseup);
          that.canvas.onmousedown = null;
          that.canvas.style.cursor = "default";
          that.allowDragRegion();

          that.triggerEvent(that.regionDragEndCallback, {
            startX: that.startX,
            startY: that.startY,
            endX: that.endX,
            endY: that.endY,
          });
        }
      }
      that.canvas.onmousedown = function () {
        isMouseDown = true;
        document.addEventListener("mousemove", mousemove);
      };
      document.addEventListener("mouseup", mouseup);
    }
  }
  allowDragRegion() {
    let that = this;
    const tolerance = 2; //鼠标划入的误差范围+-2px
    let mousemove = null;
    let isFirstMouseMove = true;
    let publicMousemove = () => {
      let params = {
        startX: that.startX,
        startY: that.startY,
        endX: that.endX,
        endY: that.endY,
      };
      if (isFirstMouseMove) {
        that.triggerEvent(that.regionDragStartCallback, params);
      }
      that.triggerEvent(that.regionDraggingCallback, params);
      isFirstMouseMove = false;
    };
    this.allowDragRegionMousemove = function (e) {
      let { x, y } = that.getMouseRelativeXy(e);

      let startX = Math.min(that.startX, that.endX);
      let endX = Math.max(that.startX, that.endX);
      let startY = Math.min(that.startY, that.endY);
      let endY = Math.max(that.startY, that.endY);
      //整体可移动
      if (
        x >= startX + tolerance &&
        x <= endX - tolerance &&
        y >= startY + tolerance &&
        y <= endY - tolerance
      ) {
        that.canvas.style.cursor = "move";
        let width = endX - startX;
        let height = endY - startY;
        let withStartXdifferenc = undefined;
        let withStartYdifferenc = undefined;
        mousemove = function (e) {
          publicMousemove();
          that.canvas.style.cursor = "move";
          let { x, y } = that.getMouseRelativeXy(e);
          withStartXdifferenc ??= x - startX;
          withStartYdifferenc ??= y - startY;
          x = Math.min(x, innerWidth - width + withStartXdifferenc);
          x = Math.max(x, withStartXdifferenc);
          y = Math.min(y, innerHeight - height + withStartYdifferenc);
          y = Math.max(y, withStartYdifferenc);
          that.setRegionSize(
            x - withStartXdifferenc,
            y - withStartYdifferenc,
            x + width - withStartXdifferenc,
            y + height - withStartYdifferenc
          );
        };
      } else {
        let boundaryConstraint = function ({ x, y }) {
          let width = innerWidth;
          let height = innerHeight;
          x = Math.max(x, 0);
          x = Math.min(x, width);
          y = Math.max(y, 0);
          y = Math.min(y, height);
          return { x, y };
        };
        //左上角可拖动
        if (
          x >= startX - tolerance &&
          x <= startX + tolerance &&
          y >= startY - tolerance &&
          y <= startY + tolerance
        ) {
          that.canvas.style.cursor = "nw-resize";
          mousemove = function (e) {
            publicMousemove();
            that.canvas.style.cursor = "nw-resize";
            let mousePosition = that.getMouseRelativeXy(e);
            let { x, y } = boundaryConstraint(mousePosition);
            that.setRegionSize(x, y, endX, endY);
          };

          //右上角可拖动
        } else if (
          x >= endX - tolerance &&
          x <= endX + tolerance &&
          y >= startY - tolerance &&
          y <= startY + tolerance
        ) {
          that.canvas.style.cursor = "ne-resize";
          mousemove = function (e) {
            publicMousemove();
            that.canvas.style.cursor = "ne-resize";
            let mousePosition = that.getMouseRelativeXy(e);
            let { x, y } = boundaryConstraint(mousePosition);
            that.setRegionSize(startX, y, x, endY);
          };
          //左下角可拖动
        } else if (
          x >= startX - tolerance &&
          x <= startX + tolerance &&
          y >= endY - tolerance &&
          y <= endY + tolerance
        ) {
          that.canvas.style.cursor = "ne-resize";
          mousemove = function (e) {
            publicMousemove();
            that.canvas.style.cursor = "ne-resize";
            let mousePosition = that.getMouseRelativeXy(e);
            let { x, y } = boundaryConstraint(mousePosition);
            that.setRegionSize(x, startY, endX, y);
          };

          //右下角可拖动
        } else if (
          x >= endX - tolerance &&
          x <= endX + tolerance &&
          y >= endY - tolerance &&
          y <= endY + tolerance
        ) {
          that.canvas.style.cursor = "nw-resize";
          mousemove = function (e) {
            publicMousemove();
            that.canvas.style.cursor = "nw-resize";
            let mousePosition = that.getMouseRelativeXy(e);
            let { x, y } = boundaryConstraint(mousePosition);
            that.setRegionSize(startX, startY, x, y);
          };
          //左边可移动
        } else if (x >= startX - tolerance && x <= startX + tolerance) {
          that.canvas.style.cursor = "w-resize";
          mousemove = function (e) {
            publicMousemove();
            that.canvas.style.cursor = "w-resize";
            let mousePosition = that.getMouseRelativeXy(e);
            let { x } = boundaryConstraint(mousePosition);
            that.setRegionSize(x, startY, endX, endY);
          };
          //右边可移动
        } else if (x >= endX - tolerance && x <= endX + tolerance) {
          that.canvas.style.cursor = "w-resize";
          mousemove = function (e) {
            publicMousemove();
            that.canvas.style.cursor = "w-resize";
            let mousePosition = that.getMouseRelativeXy(e);
            let { x } = boundaryConstraint(mousePosition);
            that.setRegionSize(startX, startY, x, endY);
          };
          //上边可移动
        } else if (y >= startY - tolerance && y <= startY + tolerance) {
          that.canvas.style.cursor = "n-resize";
          mousemove = function (e) {
            publicMousemove();
            that.canvas.style.cursor = "n-resize";
            let mousePosition = that.getMouseRelativeXy(e);
            let { y } = boundaryConstraint(mousePosition);
            that.setRegionSize(startX, y, endX, endY);
          };
          //下边可移动
        } else if (y >= endY - tolerance && y <= endY + tolerance) {
          that.canvas.style.cursor = "n-resize";
          mousemove = function (e) {
            publicMousemove();
            that.canvas.style.cursor = "n-resize";
            let mousePosition = that.getMouseRelativeXy(e);
            let { y } = boundaryConstraint(mousePosition);
            that.setRegionSize(startX, startY, endX, y);
          };
        } else {
          that.canvas.onmousedown = null;
          mousemove = null;
          that.canvas.style.cursor = "default";
        }
      }
    };
    let _mousemove = null;
    this.dragRegionMousedown = function () {
      _mousemove = mousemove;
      if (!_mousemove) return;
      document.addEventListener("mousemove", mousemove);
    };
    this.canvas.addEventListener("mousedown", this.dragRegionMousedown);
    function mouseup() {
      if (!_mousemove) return;
      isFirstMouseMove = true;
      that.triggerEvent(that.regionDragEndCallback, {
        startX: that.startX,
        startY: that.startY,
        endX: that.endX,
        endY: that.endY,
      });
      document.removeEventListener("mousemove", _mousemove);
      _mousemove = null;
    }
    document.addEventListener("mouseup", mouseup);

    this.canvas.addEventListener("mousemove", this.allowDragRegionMousemove);
  }
  notAllowDragRegion() {
    this.canvas.removeEventListener("mousemove", this.allowDragRegionMousemove);
    this.canvas.removeEventListener("mousedown", this.dragRegionMousedown);
  }
  setRegionSize(startX, startY, endX, endY) {
    const lineWidth = 2; //区域线宽
    const indicatorSize = 6; //区域八个指示器大小
    const marginToText = 5; //文字与区域间距
    const textSize = this.regionSizeIndicator.fontSize; //文字大小
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(
      this.screenshot,
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
    this.startX = Math.min(startX, endX);
    this.endX = Math.max(startX, endX);
    this.startY = Math.min(startY, endY);
    this.endY = Math.max(startY, endY);

    //填充范围（顺时针）
    this.ctx.beginPath();

    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(this.canvas.width, 0);
    this.ctx.lineTo(this.canvas.width, this.canvas.height);
    this.ctx.lineTo(0, this.canvas.height);
    //矩形范围（逆时针）
    this.ctx.moveTo(this.startX, this.startY);
    this.ctx.lineTo(this.startX, this.endY);
    this.ctx.lineTo(this.endX, this.endY);
    this.ctx.lineTo(this.endX, this.startY);
    this.ctx.closePath();
    this.ctx.fillStyle = this.maskColor;
    this.ctx.fill();
    this.ctx.strokeStyle = "#0000";
    this.ctx.stroke();
    this.ctx.lineWidth = lineWidth;

    this.ctx.beginPath();
    this.ctx.moveTo(this.startX, this.startY);
    this.ctx.lineTo(this.startX, this.endY);
    this.ctx.lineTo(this.endX, this.endY);
    this.ctx.lineTo(this.endX, this.startY);
    this.ctx.closePath();
    this.ctx.strokeStyle = this.regionColor;
    this.ctx.stroke();
    this.ctx.font = textSize + "px Arial";
    this.ctx.textBaseline = "bottom";
    this.ctx.textAlign = "left";
    let text = `${Math.max(
      1,
      Math.round(this.endX - this.startX)
    )} x ${Math.max(1, Math.round(this.endY - this.startY))}`;
    let height = this.ctx.measureText(text).fontBoundingBoxAscent;
    let textMarginToTop = this.startY - lineWidth - marginToText - height;
    this.ctx.fillStyle = this.regionSizeIndicator.color;
    if (textMarginToTop >= 0 && this.regionSizeIndicator.show) {
      this.ctx.fillText(
        text,
        this.startX + 2,
        this.startY - lineWidth - marginToText
      );
    }
    if (textMarginToTop < 0 && this.regionSizeIndicator.show) {
      this.ctx.fillText(
        text,
        this.startX + marginToText,
        this.startY + lineWidth + textSize + marginToText
      );
    }
    let indicatorSizeHalf = indicatorSize / 2;
    this.ctx.fillStyle = this.regionColor;
    let leftIndicatorPos = {
      x: this.startX - indicatorSizeHalf,
      y: (this.endY + this.startY) / 2 - indicatorSizeHalf,
    };
    let rightIndicatorPos = {
      x: this.endX - indicatorSizeHalf,
      y: (this.endY + this.startY) / 2 - indicatorSizeHalf,
    };
    let topIndicatorPos = {
      x: (this.endX + this.startX) / 2 - indicatorSizeHalf,
      y: this.startY - indicatorSizeHalf,
    };
    let bottomIndicatorPos = {
      x: (this.endX + this.startX) / 2 - indicatorSizeHalf,
      y: this.endY - indicatorSizeHalf,
    };
    this.ctx.fillRect(
      leftIndicatorPos.x,
      leftIndicatorPos.y,
      indicatorSize,
      indicatorSize
    );
    this.ctx.fillRect(
      rightIndicatorPos.x,
      rightIndicatorPos.y,
      indicatorSize,
      indicatorSize
    );
    this.ctx.fillRect(
      bottomIndicatorPos.x,
      bottomIndicatorPos.y,
      indicatorSize,
      indicatorSize
    );
    this.ctx.fillRect(
      topIndicatorPos.x,
      topIndicatorPos.y,
      indicatorSize,
      indicatorSize
    );
    this.ctx.fillRect(
      leftIndicatorPos.x,
      topIndicatorPos.y,
      indicatorSize,
      indicatorSize
    );
    this.ctx.fillRect(
      leftIndicatorPos.x,
      bottomIndicatorPos.y,
      indicatorSize,
      indicatorSize
    );
    this.ctx.fillRect(
      rightIndicatorPos.x,
      topIndicatorPos.y,
      indicatorSize,
      indicatorSize
    );
    this.ctx.fillRect(
      rightIndicatorPos.x,
      bottomIndicatorPos.y,
      indicatorSize,
      indicatorSize
    );
    this.ctx.closePath();

    this.triggerEvent(this.regionDraggingCallback, {
      startX: this.startX,
      startY: this.startY,
      endX: this.endX,
      endY: this.endY,
    });
  }
}
class Tools extends Base {
  constructor(options) {
    super(options);
    this.region = options.region;
    this.screenshot = options.screenshot;
    this.customDrawing = options.customDrawing ?? [];
    this.downloadName = options.downloadName ?? "screenshot";
    this.globalColorOptions = options.globalColorOptions ?? [
      "#ff3a3a",
      "#f8b60f",
      "#0083ff",
      "#40ff00",
      "#363636",
      "#e9e9e9",
    ];
    this.rectangleOptions = {
      lineWidth: options.rectangleOptions?.size ?? [4, 6, 8],
      lineColor: options.rectangleOptions?.color ?? this.globalColorOptions,
    };
    this.circleOptions = {
      lineWidth: options.circleOptions?.size ?? [4, 6, 8],
      lineColor: options.circleOptions?.color ?? this.globalColorOptions,
    };
    this.paintOptions = {
      lineWidth: options.paintOptions?.size ?? [4, 6, 8],
      lineColor: options.paintOptions?.color ?? this.globalColorOptions,
    };
    this.mosaicOptions = {
      lineWidth: options.mosaicOptions?.size ?? [6, 8, 10],
    };
    this.textOptions = {
      textSize: options.textOptions?.size ?? [16, 18, 20],
      textColor: options.textOptions?.color ?? this.globalColorOptions,
    };
    this.arrowOptions = {
      lineWidth: options.arrowOptions?.size ?? [4, 6, 8],
      lineColor: options.arrowOptions?.color ?? this.globalColorOptions,
    };

    this.createHandle();
    this.drawHistory = new Proxy([], {
      set(obj, prop, value) {
        if (value) {
          $(".region-screenshot_revocation").removeClass(
            "region-screenshot_disabled"
          );
        } else {
          $(".region-screenshot_revocation").addClass(
            "region-screenshot_disabled"
          );
        }
        obj[prop] = value;

        return true;
      },
    });
  }
  createCanvas() {
    if (this.canvas) return;
    let { startX, startY, endX, endY } = this.region;
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    //生成马赛克图片绘制到最底层

    document.body.appendChild(this.canvas);
    let regionWidth = endX - startX;
    let regionHeight = endY - startY;
    this.canvas.width = regionWidth;
    this.canvas.height = regionHeight;
    this.canvas.style.cssText = `position:fixed;top:${startY}px;left:${startX}px;z-index:9999`;
    this.triggerEvent(this.toolsCanvasCreatedCallback);
  }
  getOriginImg() {
    let { startX, startY, endX, endY } = this.region;
    let canvas = document.createElement("canvas");
    canvas.width = Math.max(endX - startX, 1);
    canvas.height = Math.max(endY - startY, 1);
    let ctx = canvas.getContext("2d");
    ctx.drawImage(this.screenshot, -startX, -startY, innerWidth, innerHeight);
    return canvas;
  }
  getMosaicImg() {
    let { startX, startY, endX, endY } = this.region;
    let canvas = document.createElement("canvas");
    canvas.width = endX - startX;
    canvas.height = endY - startY;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(this.screenshot, -startX, -startY, innerWidth, innerHeight);
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    // 马赛克方格大小
    const suquareSize = 10;
    // 获取整张图片的图像数据
    const data = imageData.data;

    for (let j = 0; j < canvas.height; j += suquareSize) {
      for (let i = 0; i < canvas.width; i += suquareSize) {
        // 计算方格的平均颜色
        let totalR = 0;
        let totalG = 0;
        let totalB = 0;
        let totalA = 0;
        let count = 0;
        for (let y = j; y < j + suquareSize && y < canvas.height; y++) {
          for (let x = i; x < i + suquareSize && x < canvas.width; x++) {
            let pixelIndex = (y * canvas.width + x) * 4;
            totalR += data[pixelIndex];
            totalG += data[pixelIndex + 1];
            totalB += data[pixelIndex + 2];
            totalA += data[pixelIndex + 3];
            count++;
          }
        }
        let avgR = totalR / count;
        let avgG = totalG / count;
        let avgB = totalB / count;
        let avgA = totalA / count;
        // 应用平均颜色到整个方块
        for (let y = j; y < j + suquareSize && y < canvas.height; y++) {
          for (let x = i; x < i + suquareSize && x < canvas.width; x++) {
            let pixelIndex = (y * canvas.width + x) * 4;
            data[pixelIndex] = avgR;
            data[pixelIndex + 1] = avgG;
            data[pixelIndex + 2] = avgB;
            data[pixelIndex + 3] = avgA;
          }
        }
      }
    }

    // 将处理后的图像数据放回
    ctx.putImageData(imageData, 0, 0);

    return canvas;
  }
  createHandle() {
    this.handle = document.createElement("div");
    this.handle.style.setProperty("--active-color", "#409eff");
    let rectangleOptions = this.rectangleOptions;
    let circleOptions = this.circleOptions;
    let paintOptions = this.paintOptions;
    let mosaicOptions = this.mosaicOptions;
    let textOptions = this.textOptions;
    let arrowOptions = this.arrowOptions;
    this.handle.innerHTML = `
    <ul class="region-screenshot_tools_drawing">
      <li class="region-screenshot_draw_item region-screenshot_tools_item region-screenshot_rectangle">
          <div class="region-screenshot_tools_btn"></div>
          <ul class="region-screenshot_tools_options">
            <li class="region-screenshot_tools_size_instruction_list">
            
            </li>
            <li class="region-screenshot_tools_color_instruction_list">
             
            </li>
          </ul>
      </li>
      <li class="region-screenshot_draw_item region-screenshot_tools_item region-screenshot_circle">
        <div class="region-screenshot_tools_btn"></div>
        <ul class="region-screenshot_tools_options">
          <li class="region-screenshot_tools_size_instruction_list">
          
          </li>
          <li class="region-screenshot_tools_color_instruction_list">
          
          </li>
        </ul>
      </li>
      <li class="region-screenshot_draw_item region-screenshot_tools_item region-screenshot_paint">
        <div class="region-screenshot_tools_btn"></div>
        <ul class="region-screenshot_tools_options">
          <li class="region-screenshot_tools_size_instruction_list">
          
          </li>
          <li class="region-screenshot_tools_color_instruction_list">
          
          </li>
        </ul>
      </li>
      <li class="region-screenshot_draw_item region-screenshot_tools_item region-screenshot_mosaic">
        <div class="region-screenshot_tools_btn"></div>
        <ul class="region-screenshot_tools_options">
          <li class="region-screenshot_tools_size_instruction_list">
          
          </li>
        </ul>
      </li>
      <li class="region-screenshot_draw_item region-screenshot_tools_item region-screenshot_text">
        <div class="region-screenshot_tools_btn"></div>
        <ul class="region-screenshot_tools_options">
          <li class="region-screenshot_tools_size_instruction_list">
          
          </li>
          <li class="region-screenshot_tools_color_instruction_list">
          
          </li>
        </ul>
      </li>
      <li class="region-screenshot_draw_item region-screenshot_tools_item region-screenshot_arrow">
        <div class="region-screenshot_tools_btn"></div>
        <ul class="region-screenshot_tools_options">
          <li class="region-screenshot_tools_size_instruction_list">
          
          </li>
          <li class="region-screenshot_tools_color_instruction_list">
          
          </li>
        </ul>
      </li>
      
     </ul>
     <div class="region-screenshot_tools_split"></div>
     <ul>
      <li class="region-screenshot_other_item region-screenshot_tools_item region-screenshot_revocation region-screenshot_disabled">
        <div class="region-screenshot_tools_btn"></div>
      </li>
      <li class="region-screenshot_other_item region-screenshot_tools_item region-screenshot_close">
        <div class="region-screenshot_tools_btn"></div>
      </li>
    <li class="region-screenshot_other_item region-screenshot_tools_item region-screenshot_download">
      <div class="region-screenshot_tools_btn"></div>
    </li>
    <li class="region-screenshot_other_item region-screenshot_tools_item region-screenshot_finish">
      <div class="region-screenshot_tools_btn"></div>
    </li>
     </ul>
    `;
    this.handle.className = "region-screenshot_tools";

    document.body.appendChild(this.handle);
    this.customDrawing.forEach((item) => {
      let toolsList = $(".region-screenshot_tools_drawing");

      let li = document.createElement("li");
      li.classList.add("region-screenshot_draw_item");
      li.classList.add("region-screenshot_tools_item");
      li.classList.add("region-screenshot_custom_tools");
      li.classList.add(item.className);
      li.innerHTML = `
          <div class="region-screenshot_tools_btn"></div>
      `;
      if (item.optionsHtml) {
        li.innerHTML += ` <div class="region-screenshot_tools_options">
        ${item.optionsHtml}
      </div>`;
      }
      toolsList[0].appendChild(li);
      li.onDrawingClose = item.onDrawingClose;
      li.onDrawingOpen = item.onDrawingOpen;
      if (typeof item.onOptionsCreated == "function") {
        item.onOptionsCreated(
          $(li).find(".region-screenshot_tools_options")[0]
        );
      }
    });
    rectangleOptions.lineWidth.forEach((item) => {
      let el = $(
        ".region-screenshot_rectangle .region-screenshot_tools_size_instruction_list"
      );
      el.html(
        el.html() +
          `<div line-width="${item}" class="region-screenshot_tools_size">
          <div style="width:${item}px;height:${item}px;"></div>
        </div>`
      );
    });
    rectangleOptions.lineColor.forEach((item) => {
      let el = $(
        ".region-screenshot_rectangle .region-screenshot_tools_color_instruction_list"
      );
      el.html(
        el.html() +
          `<div line-color="${item}" style="background-color:${item};" class="region-screenshot_tools_color"></div>`
      );
    });

    circleOptions.lineWidth.forEach((item) => {
      let el = $(
        ".region-screenshot_circle .region-screenshot_tools_size_instruction_list"
      );
      el.html(
        el.html() +
          `<div line-width="${item}" class="region-screenshot_tools_size">
          <div style="width:${item}px;height:${item}px;"></div>
        </div>`
      );
    });
    circleOptions.lineColor.forEach((item) => {
      let el = $(
        ".region-screenshot_circle .region-screenshot_tools_color_instruction_list"
      );
      el.html(
        el.html() +
          `<div line-color="${item}" style="background-color:${item};" class="region-screenshot_tools_color"></div>`
      );
    });

    paintOptions.lineWidth.forEach((item) => {
      let el = $(
        ".region-screenshot_paint .region-screenshot_tools_size_instruction_list"
      );
      el.html(
        el.html() +
          `<div line-width="${item}" class="region-screenshot_tools_size">
          <div style="width:${item}px;height:${item}px;"></div>
        </div>`
      );
    });
    paintOptions.lineColor.forEach((item) => {
      let el = $(
        ".region-screenshot_paint .region-screenshot_tools_color_instruction_list"
      );
      el.html(
        el.html() +
          `<div line-color="${item}" style="background-color:${item};" class="region-screenshot_tools_color"></div>`
      );
    });
    arrowOptions.lineWidth.forEach((item) => {
      let el = $(
        ".region-screenshot_arrow .region-screenshot_tools_size_instruction_list"
      );
      el.html(
        el.html() +
          `<div line-width="${item}" class="region-screenshot_tools_size">
          <div style="width:${item}px;height:${item}px;"></div>
        </div>`
      );
    });
    arrowOptions.lineColor.forEach((item) => {
      let el = $(
        ".region-screenshot_arrow .region-screenshot_tools_color_instruction_list"
      );
      el.html(
        el.html() +
          `<div line-color="${item}" style="background-color:${item};" class="region-screenshot_tools_color"></div>`
      );
    });
    mosaicOptions.lineWidth.forEach((item) => {
      let el = $(
        ".region-screenshot_mosaic .region-screenshot_tools_size_instruction_list"
      );
      el.html(
        el.html() +
          `<div line-width="${item}" class="region-screenshot_tools_size">
          <div style="width:${item}px;height:${item}px;"></div>
        </div>`
      );
    });
    textOptions.textSize.forEach((item) => {
      let el = $(
        ".region-screenshot_text .region-screenshot_tools_size_instruction_list"
      );
      el.html(
        el.html() +
          `<div text-size="${item}"  style="font-size:${item}px" class="region-screenshot_tools_size">
          T
        </div>`
      );
    });
    textOptions.textColor.forEach((item) => {
      let el = $(
        ".region-screenshot_text .region-screenshot_tools_color_instruction_list"
      );
      el.html(
        el.html() +
          `<div text-color="${item}" style="background-color:${item};" class="region-screenshot_tools_color"></div>`
      );
    });
    let that = this;
    $(".region-screenshot_draw_item .region-screenshot_tools_btn").click(
      function () {
        let parent = $(this).parent();
        let inner = $(this).next();
        if (parent.hasClass("region-screenshot_active")) {
          parent.removeClass("region-screenshot_active");
        } else if (parent.attr("is-init") === undefined) {
          parent.addClass("region-screenshot_active");

          let toolsInner = parent.find(".region-screenshot_tools_options")[0];
          if (toolsInner) {
            let toolsInnerLeft = toolsInner.getBoundingClientRect().left;
            let toolsInnerTop = toolsInner.getBoundingClientRect().top;
            let maxLeft = toolsInnerLeft + toolsInner.offsetWidth;
            let maxTop = toolsInnerTop + toolsInner.offsetHeight;
            if (maxLeft > innerWidth) {
              let offset = innerWidth - maxLeft - 1;
              toolsInner.style.transform = `translate(${offset}px, 0)`;
              toolsInner.style.setProperty(
                "--tools_inner_translate_x",
                `${offset * -1}px`
              );
            }
            let parentTop = parent[0].getBoundingClientRect().top;
            if (
              maxTop > innerHeight ||
              parentTop < that.region.canvas.offsetTop + that.region.startY
            ) {
              $(toolsInner).addClass("region-screenshot_top");
            }
            if (toolsInner.getBoundingClientRect().top < 0) {
              $(toolsInner).removeClass("region-screenshot_top");
            }
          }

          parent.attr("is-init", "");
          parent.siblings().removeClass("region-screenshot_active");
          //选中第一个线宽
          let lineWidthOptions = inner.find(
            ".region-screenshot_tools_size_instruction_list > div"
          );
          if (lineWidthOptions.length) {
            lineWidthOptions[0].click();
          }
          //选中第一个颜色
          let lineColorOptions = inner.find(".region-screenshot_tools_color");
          if (lineColorOptions.length) {
            lineColorOptions[0].click();
          }
        } else {
          //选中上次线宽
          let lastLineWidth = inner.find(
            ".region-screenshot_tools_size_instruction_list > div.region-screenshot_active"
          );
          lastLineWidth.click();

          //选中上次颜色
          let lastLineColor = inner.find(
            ".region-screenshot_tools_color.region-screenshot_active"
          );
          lastLineColor.click();
          parent.addClass("region-screenshot_active");
        }
        parent.siblings().removeClass("region-screenshot_active");
        that.closeCurrentDraw && that.closeCurrentDraw(true);
        if (parent.hasClass("region-screenshot_active")) {
          if (parent.hasClass("region-screenshot_rectangle")) {
            that.closeCurrentDraw = that.drawRectangle();
          } else if (parent.hasClass("region-screenshot_circle")) {
            that.closeCurrentDraw = that.drawCircle();
          } else if (parent.hasClass("region-screenshot_paint")) {
            that.closeCurrentDraw = that.drawPaint();
          } else if (parent.hasClass("region-screenshot_mosaic")) {
            that.closeCurrentDraw = that.drawMosaic();
          } else if (parent.hasClass("region-screenshot_text")) {
            that.closeCurrentDraw = that.drawText();
          } else if (parent.hasClass("region-screenshot_arrow")) {
            that.closeCurrentDraw = that.drawArrow();
          } else if (parent.hasClass("region-screenshot_custom_tools")) {
            that.closeCurrentDraw = that.drawCustom(this);
          }
        }
      }
    );
    $(".region-screenshot_tools_size").click(function () {
      $(this).addClass("region-screenshot_active");
      $(this).siblings().removeClass("region-screenshot_active");
      that.checkedLineWidth = Number($(this).attr("line-width"));
      that.checkedTextSize = Number($(this).attr("text-size"));
    });
    $(".region-screenshot_tools_color").click(function () {
      $(this).addClass("region-screenshot_active");
      $(this).siblings().removeClass("region-screenshot_active");
      that.checkedLineColor = $(this).attr("line-color");
      that.checkedTextColor = $(this).attr("text-color");
    });

    $(".region-screenshot_other_item .region-screenshot_tools_btn").click(
      function () {
        let parent = $(this).parent();
        if (parent.hasClass("region-screenshot_revocation")) {
          that.revocation();
        } else if (parent.hasClass("region-screenshot_close")) {
          that.triggerEvent(that.closedCallback);
        } else if (parent.hasClass("region-screenshot_finish")) {
          that.screenshotGenerate().then((url) => {
            that.triggerEvent(that.screenshotGeneratedCallback, url);
          });
        } else if (parent.hasClass("region-screenshot_download")) {
          that.screenshotDownload().then((url) => {
            that.close();
            that.triggerEvent(that.screenshotDownloadCallback, url);
          });
        }
      }
    );
    this.handle.style.display = "none";
  }
  updateHandlePosition() {
    let { startX, startY, endX, endY } = this.region;

    const marginToRegion = 10;
    let style = this.handle.style;
    let width = this.handle.offsetWidth;
    let height = this.handle.offsetHeight;
    let left = 0;

    if (endX > width) {
      left = endX - width;
    } else {
      left = startX;
    }
    style.left = left + "px";
    if (
      startY - marginToRegion - height < 0 &&
      endY + marginToRegion + height > window.innerHeight
    ) {
      style.top = endY - marginToRegion - height + "px";
      style.left = left - marginToRegion + "px";
    } else if (endY + marginToRegion + height > window.innerHeight) {
      style.top = startY - marginToRegion - height + "px";
    } else {
      style.top = endY + marginToRegion + "px";
    }
  }
  updateHandleDisplay(display) {
    this.handle.style.display = display;
  }
  revocation() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawHistory.pop();
    this.drawHistory.length &&
      this.ctx.drawImage(this.drawHistory.at(-1), 0, 0);
  }
  async screenshotGenerate() {
    if (this.drawTextActivity) {
      await this.drawTextActivity();
    }
    let canvas = this.getOriginImg();
    let ctx = canvas.getContext("2d");
    if (this.canvas) {
      ctx.drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height);
    }
    let url = canvas.toDataURL("image/png");
    return url;
  }
  async screenshotDownload() {
    let url = await this.screenshotGenerate();
    let a = document.createElement("a");
    a.href = url;
    a.download = this.downloadName + ".png";
    a.click();
    return url;
  }
  drawRectangle() {
    this.createCanvas();
    let that = this;
    let startX, startY, endX, endY;
    let isMouseMove = false;
    let isMouseDown = false;
    this.canvas.style.cursor = "crosshair";
    let drawAction = null;
    function mousemove(e) {
      isMouseMove = true;
      that.ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);
      that.drawHistory.length &&
        that.ctx.drawImage(that.drawHistory.at(-1), 0, 0);
      let { x, y } = that.getMouseRelativeXy(e);
      if (startX === undefined && startY === undefined) {
        startX = x;
        startY = y;
        endX = x;
        endY = y;
      } else {
        endX = x;
        endY = y;
      }

      endX = Math.min(endX, that.canvas.width);
      endY = Math.min(endY, that.canvas.height);
      endX = Math.max(endX, 0);
      endY = Math.max(endY, 0);
      let lineWidth = that.checkedLineWidth;
      let lineColor = that.checkedLineColor;
      drawAction = () => {
        that.ctx.beginPath(); //加了beginPath才会成功清掉上次绘制的 why？
        that.ctx.rect(startX, startY, endX - startX, endY - startY);
        that.ctx.strokeStyle = lineColor;
        that.ctx.lineWidth = lineWidth;
        that.ctx.stroke();
        that.ctx.closePath();
      };
      drawAction();
    }
    function mouseup(isClose) {
      if (isMouseDown || isClose === true) {
        document.removeEventListener("mousemove", mousemove);
        if (!isMouseMove && isClose !== true) {
          //只是点了一下，鼠标没有选择区域
          return;
        }
        if (drawAction && isClose !== true) {
          that.saveHistory();
        }
        document.removeEventListener("mousemove", mousemove);
        document.removeEventListener("mouseup", mouseup);
        that.canvas.onmousedown = null;
        that.canvas.style.cursor = "default";
        if (isClose !== true) {
          that.drawRectangle();
        }
      }
    }
    this.canvas.onmousedown = function () {
      isMouseDown = true;
      that.ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);
      that.drawHistory.length &&
        that.ctx.drawImage(that.drawHistory.at(-1), 0, 0);
      document.addEventListener("mousemove", mousemove);
    };
    document.addEventListener("mouseup", mouseup);
    return mouseup;
  }
  drawCircle() {
    this.createCanvas();
    let that = this;
    let startX, startY, endX, endY;
    let isMouseMove = false;
    let isMouseDown = false;
    this.canvas.style.cursor = "crosshair";
    let drawAction = null;
    function mousemove(e) {
      isMouseMove = true;
      that.ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);
      that.drawHistory.length &&
        that.ctx.drawImage(that.drawHistory.at(-1), 0, 0);
      let { x, y } = that.getMouseRelativeXy(e);
      if (startX === undefined && startY === undefined) {
        startX = x;
        startY = y;
        endX = x;
        endY = y;
      } else {
        endX = x;
        endY = y;
      }

      endX = Math.min(endX, that.canvas.width);
      endY = Math.min(endY, that.canvas.height);
      endX = Math.max(endX, 0);
      endY = Math.max(endY, 0);
      let lineWidth = that.checkedLineWidth;
      let lineColor = that.checkedLineColor;
      drawAction = () => {
        that.ctx.beginPath(); //加了beginPath才会成功清掉上次绘制的 why？

        let width = endX - startX;
        let height = endY - startY;
        let orginX = startX + width / 2;
        let orginY = startY + height / 2;
        that.ctx.ellipse(
          orginX,
          orginY,
          Math.abs(width / 2),
          Math.abs(height / 2),
          0,
          0,
          Math.PI * 2
        );
        that.ctx.strokeStyle = lineColor;
        that.ctx.lineWidth = lineWidth;
        that.ctx.stroke();
        that.ctx.closePath();
      };
      drawAction();
    }
    function mouseup(isClose) {
      if (isMouseDown || isClose === true) {
        document.removeEventListener("mousemove", mousemove);
        if (!isMouseMove && isClose !== true) {
          //只是点了一下，鼠标没有选择区域
          return;
        }
        if (drawAction && isClose !== true) {
          that.saveHistory();
        }
        document.removeEventListener("mousemove", mousemove);
        document.removeEventListener("mouseup", mouseup);
        that.canvas.onmousedown = null;
        that.canvas.style.cursor = "default";
        if (isClose !== true) {
          that.drawCircle();
        }
      }
    }
    this.canvas.onmousedown = function () {
      isMouseDown = true;
      that.ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);
      that.drawHistory.length &&
        that.ctx.drawImage(that.drawHistory.at(-1), 0, 0);
      document.addEventListener("mousemove", mousemove);
    };
    document.addEventListener("mouseup", mouseup);
    return mouseup;
  }
  drawPaint() {
    this.createCanvas();
    let that = this;
    let isMouseMove = false;
    let isMouseDown = false;
    this.canvas.style.cursor = "crosshair";
    let drawAction = null;
    let path = [];
    function mousemove(e) {
      isMouseMove = true;
      that.ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);
      that.drawHistory.length &&
        that.ctx.drawImage(that.drawHistory.at(-1), 0, 0);
      let { x, y } = that.getMouseRelativeXy(e);
      x = Math.min(x, that.canvas.width);
      y = Math.min(y, that.canvas.height);
      x = Math.max(x, 0);
      y = Math.max(y, 0);
      let lineWidth = that.checkedLineWidth;
      let lineColor = that.checkedLineColor;
      drawAction = () => {
        path.push([x, y]);
        that.ctx.beginPath(); //加了beginPath才会成功清掉上次绘制的 why？
        that.ctx.moveTo(...path[0]);
        for (let i = 1; i < path.length; i++) {
          that.ctx.lineTo(...path[i]);
        }
        that.ctx.strokeStyle = lineColor;
        that.ctx.lineWidth = lineWidth;
        that.ctx.stroke();
        that.ctx.closePath();
      };
      drawAction();
    }
    function mouseup(isClose) {
      if (isMouseDown || isClose === true) {
        document.removeEventListener("mousemove", mousemove);
        if (!isMouseMove && isClose !== true) {
          //只是点了一下，鼠标没有选择区域
          return;
        }
        if (drawAction && isClose !== true) {
          that.saveHistory();
        }
        document.removeEventListener("mousemove", mousemove);
        document.removeEventListener("mouseup", mouseup);
        that.canvas.onmousedown = null;
        that.canvas.style.cursor = "default";
        if (isClose !== true) {
          that.drawPaint();
        }
      }
    }
    this.canvas.onmousedown = function () {
      isMouseDown = true;
      that.ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);
      that.drawHistory.length &&
        that.ctx.drawImage(that.drawHistory.at(-1), 0, 0);
      document.addEventListener("mousemove", mousemove);
    };
    document.addEventListener("mouseup", mouseup);
    return mouseup;
  }
  drawMosaic() {
    this.createCanvas();
    let that = this;
    let isMouseMove = false;
    let isMouseDown = false;
    this.canvas.style.cursor = `crosshair`;
    let drawAction = null;
    let path = [];
    let canvasOrigin = document.createElement("canvas");
    canvasOrigin.width = that.canvas.width;
    canvasOrigin.height = that.canvas.height;
    let ctxOrigin = canvasOrigin.getContext("2d");
    let canvasMosaic = document.createElement("canvas");
    canvasMosaic.width = that.canvas.width;
    canvasMosaic.height = that.canvas.height;
    let ctxMosaic = canvasMosaic.getContext("2d");

    let orginImg = this.getOriginImg();
    let imgMosaic = this.getMosaicImg();

    function mousemove(e) {
      isMouseMove = true;
      that.ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);
      ctxOrigin.clearRect(0, 0, that.canvas.width, that.canvas.height);
      ctxMosaic.clearRect(0, 0, that.canvas.width, that.canvas.height);
      ctxMosaic.drawImage(imgMosaic, 0, 0);
      ctxOrigin.drawImage(orginImg, 0, 0);
      let { x, y } = that.getMouseRelativeXy(e);
      x = Math.min(x, that.canvas.width);
      y = Math.min(y, that.canvas.height);
      x = Math.max(x, 0);
      y = Math.max(y, 0);
      let lineWidth = that.checkedLineWidth;
      let lineColor = that.checkedLineColor;
      path.push([x, y]);

      ctxOrigin.beginPath(); //加了beginPath才会成功清掉上次绘制的 why？
      ctxOrigin.moveTo(...path[0]);
      for (let i = 1; i < path.length; i++) {
        ctxOrigin.lineTo(...path[i]);
      }
      ctxOrigin.strokeStyle = lineColor;
      ctxOrigin.lineWidth = lineWidth;
      ctxOrigin.save();
      ctxOrigin.globalCompositeOperation = "destination-out";
      ctxOrigin.stroke();
      ctxOrigin.closePath();
      ctxOrigin.restore();
      ctxMosaic.drawImage(canvasOrigin, 0, 0);
      ctxMosaic.beginPath(); //加了beginPath才会成功清掉上次绘制的 why？
      ctxMosaic.moveTo(...path[0]);
      for (let i = 1; i < path.length; i++) {
        ctxMosaic.lineTo(...path[i]);
      }
      ctxMosaic.strokeStyle = lineColor;
      ctxMosaic.lineWidth = lineWidth;
      ctxMosaic.save();
      ctxMosaic.globalCompositeOperation = "destination-in";
      ctxMosaic.stroke();
      ctxMosaic.closePath();
      ctxMosaic.restore();

      drawAction = () => {
        that.ctx.drawImage(canvasMosaic, 0, 0);
      };

      drawAction();
      that.drawHistory.length &&
        that.ctx.drawImage(that.drawHistory.at(-1), 0, 0);
    }
    function mouseup(isClose) {
      if (isMouseDown || isClose === true) {
        document.removeEventListener("mousemove", mousemove);
        if (!isMouseMove && isClose !== true) {
          //只是点了一下，鼠标没有选择区域
          return;
        }
        if (drawAction && isClose !== true) {
          that.saveHistory();
        }
        document.removeEventListener("mousemove", mousemove);
        document.removeEventListener("mouseup", mouseup);
        that.canvas.onmousedown = null;
        that.canvas.style.cursor = "default";
        if (isClose !== true) {
          that.drawMosaic();
        }
      }
    }
    this.canvas.onmousedown = function () {
      isMouseDown = true;
      that.ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);
      that.drawHistory.length &&
        that.ctx.drawImage(that.drawHistory.at(-1), 0, 0);
      document.addEventListener("mousemove", mousemove);
    };
    document.addEventListener("mouseup", mouseup);
    return mouseup;
  }
  drawText() {
    this.createCanvas();
    let that = this;
    this.canvas.style.cursor = "text";
    let input = null;
    let left = 0;
    let top = 0;
    const padding = [3, 3];
    const borderWidth = 1;
    let flag = false;
    this.drawTextActivity = () => {
      return new Promise((resolve) => {
        if (!input) {
          return resolve();
        }
        if (!input.children[0].innerText) {
          input.remove();
          input = null;
          return resolve();
        }
        domToImage.toPng(input.children[0], { quality: 1 }).then((dataUrl) => {
          let img = new Image();
          img.src = dataUrl;
          img.onload = () => {
            let _left = left;
            let _top = top;
            let startX = input.scrollLeft - borderWidth;
            let startY = input.scrollTop - borderWidth;
            let offsetWidth = input.offsetWidth;
            let offsetHeight = input.offsetHeight;
            let drawAction = () => {
              that.ctx.drawImage(
                img, //图片
                startX, //从x坐标截取
                startY, // 从y坐标截取
                offsetWidth, //截取宽度
                offsetHeight, //截取高度
                _left, //在画布x位置显示
                _top, //在画布y位置显示
                offsetWidth, //显示的宽度
                offsetHeight //显示的高度
              );
            };
            drawAction();
            that.saveHistory();
            input.remove();
            input = null;
            resolve();
          };
        });
      });
    };
    function click(e) {
      if (input) {
        if (flag) return;
        flag = true;
        input.children[0].style.borderColor = "#0000";
        that.drawTextActivity().then(() => {
          flag = false;
        });
      } else {
        let { x, y } = that.getMouseRelativeXy(e);
        input = document.createElement("div");
        let minWidth = 30;
        left = Math.min(
          x - padding[1],
          that.canvas.offsetWidth -
            (minWidth + padding[1] * 2 + borderWidth * 2)
        );
        left = Math.max(borderWidth, left);
        top = Math.min(
          y - (padding[0] * 2 + that.checkedTextSize) / 2,
          that.canvas.offsetHeight -
            (that.checkedTextSize + padding[0] * 2 + borderWidth * 2)
        );
        top = Math.max(borderWidth, top);
        input.style.cssText = `
            position:fixed;
            left:${left + that.canvas.offsetLeft}px;
            top:${top + that.canvas.offsetTop}px;
            z-index:10000;
            overflow:hidden;
            font-weight:bolder;
            border: ${borderWidth}px solid ${that.checkedTextColor};
            `;
        input.innerHTML = `
          <div 
          style="
          min-width:${minWidth}px;
          max-width:${
            that.canvas.offsetWidth - left - padding[1] * 2 - borderWidth * 2
          }px;
          max-height:${
            that.canvas.offsetHeight - top - padding[0] * 2 - borderWidth * 2
          }px;
          min-height: ${that.checkedTextSize}px;
          background: #0000;
          
          outline:none;
          padding:${padding[0]}px ${padding[1]}px;
          font-size:${that.checkedTextSize}px;
          color:${that.checkedTextColor};
          font-family: 'Arial';
          
         "></div>
        `;
        document.body.appendChild(input);
        input.children[0].setAttribute("contenteditable", "true");
        input.children[0].focus();
      }
    }
    function globeClick(e) {
      if (
        e.target !== that.canvas &&
        input &&
        e.target !== input.children[0] &&
        !$(e.target).parent().hasClass("region-screenshot_finish")
      ) {
        click();
      }
    }
    this.canvas.addEventListener("click", click);
    document.addEventListener("click", globeClick);
    return () => {
      this.canvas.removeEventListener("click", click);
      document.removeEventListener("click", globeClick);
      this.canvas.style.cursor = "default";
    };
  }
  drawArrow() {
    this.createCanvas();
    let that = this;
    let startX, startY, endX, endY;
    let isMouseMove = false;
    let isMouseDown = false;
    this.canvas.style.cursor = "crosshair";
    let drawAction = null;
    function mousemove(e) {
      isMouseMove = true;
      that.ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);
      that.drawHistory.length &&
        that.ctx.drawImage(that.drawHistory.at(-1), 0, 0);
      let { x, y } = that.getMouseRelativeXy(e);
      if (startX === undefined && startY === undefined) {
        startX = x;
        startY = y;
        endX = x;
        endY = y;
      } else {
        endX = x;
        endY = y;
      }

      endX = Math.min(endX, that.canvas.width);
      endY = Math.min(endY, that.canvas.height);
      endX = Math.max(endX, 0);
      endY = Math.max(endY, 0);
      let lineWidth = that.checkedLineWidth; //定义箭头的宽度（头部底部内左侧到内右侧距离）

      let lineColor = that.checkedLineColor;

      let radius1 = (10 * Math.PI) / 180; //箭头内侧旋转角度
      let radius2 = (20 * Math.PI) / 180; //箭头外侧旋转弧度

      let distance = Math.sqrt(
        Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2),
        2
      );
      let lenWidth1 = Math.min(lineWidth, distance / 3) / 2 / Math.sin(radius1); //定义头部内侧距箭头顶端长度（头部底部内左到内右再到头部顶端构成了一个等腰三角形，已知底边顶角度数，求腰长）
      let lenWidth2 = lenWidth1 * 1.2; //头部外侧距箭头顶端长度

      let dx = endX - startX;
      let dy = endY - startY;
      let angle = Math.atan2(dy, dx);

      drawAction = () => {
        that.ctx.beginPath(); //加了beginPath才会成功清掉上次绘制的 why？
        that.ctx.beginPath();
        //cos余弦函数接收一个角的弧度值，返回该角对应的邻边与斜边的比值。
        //sin正弦函数接收一个角的弧度值，返回该角对应的对边与斜边的比值。
        that.ctx.moveTo(startX, startY);
        //头部底部内右侧
        that.ctx.lineTo(
          endX - lenWidth1 * Math.cos(angle - radius1),
          endY - lenWidth1 * Math.sin(angle - radius1)
        );
        //头部底部外右侧
        that.ctx.lineTo(
          endX - lenWidth2 * Math.cos(angle - radius2),
          endY - lenWidth2 * Math.sin(angle - radius2)
        );
        // //头部顶端
        that.ctx.lineTo(endX, endY);
        //头部底部外左侧
        that.ctx.lineTo(
          endX - lenWidth2 * Math.cos(angle + radius2),
          endY - lenWidth2 * Math.sin(angle + radius2)
        );
        //头部底部内左侧
        that.ctx.lineTo(
          endX - lenWidth1 * Math.cos(angle + radius1),
          endY - lenWidth1 * Math.sin(angle + radius1)
        );
        //回到起点
        that.ctx.lineTo(startX, startY);
        that.ctx.closePath();
        that.ctx.fillStyle = lineColor;
        that.ctx.fill();
      };
      drawAction();
    }
    function mouseup(isClose) {
      if (isMouseDown || isClose === true) {
        document.removeEventListener("mousemove", mousemove);
        if (!isMouseMove && isClose !== true) {
          //只是点了一下，鼠标没有选择区域
          return;
        }
        if (drawAction && isClose !== true) {
          that.saveHistory();
        }
        document.removeEventListener("mousemove", mousemove);
        document.removeEventListener("mouseup", mouseup);
        that.canvas.onmousedown = null;
        that.canvas.style.cursor = "default";
        if (isClose !== true) {
          that.drawArrow();
        }
      }
    }
    this.canvas.onmousedown = function () {
      isMouseDown = true;
      that.ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);
      that.drawHistory.length &&
        that.ctx.drawImage(that.drawHistory.at(-1), 0, 0);
      document.addEventListener("mousemove", mousemove);
    };
    document.addEventListener("mouseup", mouseup);
    return mouseup;
  }
  drawCustom(that) {
    let li = $(that).parent()[0];
    this.createCanvas();
    if (typeof li.onDrawingOpen == "function") {
      li.onDrawingOpen(this.canvas, li, () => {
        this.saveHistory();
      });
    }

    return () => {
      if (typeof li.onDrawingClose == "function") {
        li.onDrawingClose(this.canvas, li);
      }
    };
  }
  saveHistory() {
    let dataUrl = this.canvas.toDataURL("image/png");
    let img = new Image();
    img.src = dataUrl;
    img.onload = () => {
      this.drawHistory.push(img);
    };
  }
  close() {
    this.canvas && this.canvas.remove();
    this.handle.remove();
  }
}
class RegionScreenshot extends Base {
  constructor(options = {}) {
    super();
    options.regionColor ??= "#409eff";
    this.region = new SelectRegion({
      ...options,
    });
    this.tools = new Tools({
      region: this.region,
      ...options,
    });

    let bodyStyle = getComputedStyle(document.body);
    this.bodyOriginStyle = {
      overflow: bodyStyle.overflow,
      userSelect: bodyStyle.userSelect,
    };
    this.initializeFinished = false;
    document.body.style.userSelect = "none";
    document.body.style.overflow = "hidden";

    //截图

    this.screenshot()
      .then((canvas) => {
        let dataUrl = canvas.toDataURL("image/png");
        let img = new Image();
        img.src = dataUrl;
        img.onload = () => {
          if (!this.webRTCStream) return;
          this.region.screenshot = img;
          this.region.on("regionDragStart", (e) => {
            this.tools.updateHandleDisplay("none");
          });
          this.region.on("regionDragEnd", (e) => {
            this.tools.updateHandleDisplay("flex");
            this.tools.updateHandlePosition(e);
          });
          this.tools.screenshot = img;
          this.region.init();
          this.tools.on("toolsCanvasCreated", () => {
            this.region.notAllowDragRegion();
          });
          this.tools.on("closed", () => {
            this.close();
          });
          this.tools.on("screenshotDownload", () => {
            this.close();
          });
          this.tools.on("screenshotGenerated", () => {
            this.close();
          });
          this.initializeFinished = true;
        };
        img.onerror = (error) => {
          this.triggerEvent(this.errorCreatedCallback, error);
        };
      })
      .catch((error) => {
        this.triggerEvent(this.errorCreatedCallback, error);
      });
  }
  screenshot() {
    return new Promise((resolve, reject) => {
      //隐藏掉光标
      let topEl = document.createElement("div");
      topEl.style.cssText = `position: fixed;top: 0;left: 0;width: ${innerWidth}px;height: ${innerHeight}px;z-index: 9999;cursor: none;`;

      //获取屏幕共享流
      navigator.mediaDevices
        .getDisplayMedia({
          video: {
            // frameRate: 1,
          },
          preferCurrentTab: 1,
          audio: false,
        })
        .then((stream) => {
          document.body.appendChild(topEl);
          let video = document.createElement("video");
          video.setAttribute("autoplay", "autoplay");
          video.srcObject = stream;
          this.webRTCStream = stream;
          let timeout = null;
          video.onplay = function () {
            timeout = setTimeout(function () {
              topEl.remove();
              let canvas = document.createElement("canvas");
              canvas.width = innerWidth;
              canvas.height = innerHeight;
              let ctx = canvas.getContext("2d");
              ctx.drawImage(video, 0, 0, innerWidth, innerHeight);
              resolve(canvas);
            }, 500);
          };
          let that = this;
          stream.getTracks()[0].onended = function () {
            topEl.remove();
            if (that.initializeFinished) {
              that.triggerEvent(that.closedCallback);
            } else {
              clearTimeout(timeout);
              that.triggerEvent(that.errorCreatedCallback);
            }
            that.close();
          };
        })
        .catch((error) => {
          this.close();
          reject(error);
        });
    });
  }
  close() {
    if (this.region) {
      this.region.canvas && this.region.canvas.remove();
    }
    if (this.tools) {
      this.tools.handle && this.tools.handle.remove();
      this.tools.canvas && this.tools.canvas.remove();
    }

    if (this.webRTCStream) {
      let tracks = this.webRTCStream.getTracks();
      tracks.forEach((track) => track.stop());
      this.webRTCStream = null;
    }
    document.body.style.overflow = this.bodyOriginStyle.overflow;
    document.body.style.userSelect = this.bodyOriginStyle.userSelect;
  }
  on(eventName, callback) {
    super.on(eventName, callback);
    this.region.on(eventName, callback);
    this.tools.on(eventName, callback);
  }
}
export default RegionScreenshot;
