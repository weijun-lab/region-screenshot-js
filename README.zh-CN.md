
# region-screenshot-js
- - -
**语言:** [English](README.md) / [简体中文](README.zh-CN.md)
- - -
A web-based selection screenshot plugin that helps you quickly build a beautiful and functional screenshot selection feature. 

一个web端选区截图插件，帮助你快速构建出精美的选区截图功能。
- - -
## 🎨在线Demo
<https://weijun-lab.github.io/region-screenshot-js/>
## 它如何工作
region-screenshot-js的核心原理是使用`WebRTC`（Web Real-Time Communication）技术，读取浏览器标签页信息。因此region-screenshot-js只允许在本地环境或者HTTPS环境中运行。  
你也可以通过如下设置使浏览器在在非HTTPS环境中运行region-screenshot-js，假设使用Chrome浏览器： **(请谨慎使用，这可能引入安全隐患）**：  
1. 进入chrome://flags/#unsafely-treat-insecure-origin-as-secure
2. 在Insecure origins treated as secure文本框中输入你的网站地址，例如：https://www.example.com
3. 勾选右侧Enable
## 安装
* `npm install region-screenshot-js`
* Or download the repository
## 使用
### ESM(ECMAScript Modules)
```js
import RegionScreenshot from "region-screenshot-js";
```
### UMD(Universal Module Definition)
```html
<script src="region-screenshot-js/region-screenshot.umd.js"></script>
```
---
```js
let screenshot = new RegionScreenshot();
```
## 代码示例
```js
let screenshot = new RegionScreenshot();
screenshot.on("screenshotGenerated",(dataUrl)=>{
	console.log(dataUrl);
})
```
## 文档
### Options
| 配置项 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| **maskColor** | String | rgba(0,0,0,0.5) | 遮罩层颜色 |
| **globalColorOptions** | Array | [<br>"#ff3a3a","#f8b60f",<br>"#0083ff","#40ff00",<br>"#363636","#e9e9e9"<br>] | 配置所有绘制项可供选择的颜色（当绘制项有单独的颜色配置时，该配置无效） |
| **regionSizeIndicator** | [Object](#regionSizeIndicator) | {...} | 左上角区域大小指示器样式（见下文）|
| **rectangleOptions** | Object | {<br>color:globalColorOptions,<br>size: [4, 6, 8]<br>} | 配置矩形绘制项可供选择的颜色和线宽 |
| **circleOptions** | Object | {<br>color:globalColorOptions,<br>size: [4, 6, 8]<br>} | 配置圆形绘制项可供选择的颜色和线宽 |
| **paintOptions** | Object | {<br>color:globalColorOptions,<br>size: [4, 6, 8]<br>} | 配置自由画笔绘制项可供选择的颜色和线宽 |
| **mosaicOptions** | Object | {<br>size: [6, 8, 10]<br>} | 配置马赛克绘制项可供选择的线宽 |
| **textOptions** | Object | {<br>color:globalColorOptions,<br>size: [16, 18, 20]<br>} | 配置文字绘制项可供选择的颜色和字体尺寸 |
| **arrowOptions** | Object | {<br>color:globalColorOptions,<br>size: [4, 6, 8]<br>} | 配置箭头绘制项可供选择的颜色和线宽 |
| **customDrawing** |  Array<br><[customDrawingObject](#customDrawingObject)> | - | 自定义绘制（见下文） |

<a id="regionSizeIndicator"></a>

#### regionSizeIndicator
| Options | Type | Default | Description |
| --- | --- | --- | --- |
| **show** | Boolean | true | 尺寸指示器是否显示 |
| **color** | String | #ffffff | 尺寸指示器颜色 |
| **fontSize** | Number | 14 | 尺寸指示器尺寸 |

<a id="customDrawingObject"></a>

#### customDrawingObject
##### Code Example
```js
//其中“$”来自于jquery.js
let screenshot = new RegionScreenshot({
  customDrawing: [
    {
      className: "triangle",
      optionsHtml: `
        <div class="triangle-size-options active" size="3">min</div>
        <div class="triangle-size-options" size="5">middle</div>
        <div class="triangle-size-options" size="7">max</div>
      `,
      onOptionsCreated(optionsEl) {
        $(optionsEl)
          .find("div")
          .click(function () {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
          });
      },
      onDrawingOpen(canvasEl,optionsEl,saveCallback) {
        let ctx = canvasEl.getContext("2d");
        canvasEl.style.cursor = "crosshair";
        canvasEl.onclick = function (e) {
          ctx.beginPath();
          ctx.lineWidth = $(optionsEl).find(".triangle-size-options.active").attr("size");
          ctx.moveTo(e.offsetX, e.offsetY - 10);
          ctx.lineTo(e.offsetX - 10, e.offsetY + 10);
          ctx.lineTo(e.offsetX + 10, e.offsetY + 10);
          ctx.closePath();
          ctx.stroke();
          saveCallback();//请在绘制结束后调用保存回调，以确保插件的撤销功能正常
        };
      },
      onDrawingClose(canvasEl) {
        canvasEl.onclick = null;
        canvasEl.style.cursor = "default";
      },
    },
  ],
});
```
| 配置项 | 类型 | 描述 |
| --- | --- | --- |
| **className** | String | 自定义绘制项的类名 |
| **optionsHtml** | String | 定义自定义绘制项二级菜单的html内容 |
| **onOptionsCreated** | Function | 当自定义绘制项的二级菜单创建完成该函数将被调用，可在参数中获取到`二级菜单dom对象` |
| **onDrawingOpen** | Function | 当自定义绘制项被激活时该函数将被调用，可在参数中获取到`二级菜单dom对象`、`canvas dom对象`、`保存历史记录函数`，注意：请在每次自定义绘制结束后调用`保存历史记录函数`，以确保插件的撤销功能正常 |
| **onDrawingClose** | Function | 当自定义绘制项被关闭时该函数将被调用 |
### Event
#### 代码示例
```js
let screenshot = new RegionScreenshot();
screenshot.on("successCreated",(dataUrl)=>{
	console.log("插件初始化成功");
});
screenshot.on("screenshotGenerated",(dataUrl)=>{
	console.log(dataUrl);
});
```
| 事件名称 | 描述 |
| --- | --- |
| **screenshotGenerated** | 截图生成完成时触发，可在回调中获取`图片base64编码` |
| **screenshotDownload** | 截图被下载时触发，可在回调中获取`图片base64编码` |
| **regionDragging** | 选区尺寸或位置改变时触发，可在回调中获取`选区的详细位置信息` |
| **regionDragStart** | 选区尺寸或位置改变前触发，可在回调中获取`选区的详细位置信息` |
| **regionDragEnd** | 选区尺寸或位置改变后触发，可在回调中获取`选区的详细位置信息` |
| **successCreated** | 插件初始化成功时触发 |
| **errorCreated** | 插件初始化失败时触发，可在回调中接受`错误信息` |
| **closed** | 插件被关闭时触发 |
# 🎉致谢与引用
感谢以下插件，他们为region-screenshot-js实现提供了支持.
* [dom-to-image](https://github.com/tsayen/dom-to-image) 一个将dom节点转换成图片的插件（在文字绘制时使用了该插件）
* [jquery](https://github.com/jquery/jquery) jquery是一个快速、简洁的JavaScript框架（在dom选择和事件绑定是使用了该插件）