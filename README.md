
# region-screenshot-js
- - -
**language:** [English](README.md) / [简体中文](README.zh-CN.md)
- - -
A web-based selection screenshot plugin that helps you quickly build a beautiful and functional screenshot selection feature. 
- - -
## 🎨Live Demo
<https://weijun-lab.github.io/region-screenshot-js/>
## How it Works
The core principle of region-screenshot-js relies on `WebRTC` (Web Real-Time Communication) technology to read browser tab information. Therefore, region-screenshot-js can only operate in a local environment or under HTTPS.

For running region-screenshot-js in non-HTTPS environments **(use with caution as this may introduce security risks)**, follow these steps in Chrome:
1. Navigate to `chrome://flags/#unsafely-treat-insecure-origin-as-secure`.
2. Input your website address into the 'Insecure origins treated as secure' field, e.g., `http://www.example.com`.
3. Toggle the "Enable" option.
## Installation
* `npm install region-screenshot-js`
* Or download the repository
## Usage
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
## Code Example
```js
let screenshot = new RegionScreenshot();
screenshot.on("screenshotGenerated",(dataUrl)=>{
	console.log(dataUrl);
})
```
## Documentation
### Options
| Options | Type | Default | Description |
| --- | --- | --- | --- |
| **downloadName** | String | screenshot | Screenshot Download Filename |
| **regionColor** | String | #409eff | region outline color |
| **maskColor** | String | rgba(0,0,0,0.5) | Mask layer color |
| **globalColorOptions** | String | [<br>"#ff3a3a","#f8b60f",<br>"#0083ff","#40ff00",<br>"#363636","#e9e9e9"<br>] | Available colors for all drawing items (overrides when individual item has its color config) |
| **regionSizeIndicator** | [Object](#regionSizeIndicator) | {...} | Top-left region size indicator styles (see below) |
| **rectangleOptions** | Object | {<br>color:globalColorOptions,<br>size: [4, 6, 8]<br>} | Configures available colors and line widths for rectangle drawing |
| **circleOptions** | Object | {<br>color:globalColorOptions,<br>size: [4, 6, 8]<br>} | Configures available colors and line widths for circle drawing |
| **paintOptions** | Object | {<br>color:globalColorOptions,<br>size: [4, 6, 8]<br>} | Configures available colors and line widths for freehand drawing |
| **mosaicOptions** | Object | {<br>size: [6, 8, 10]<br>} | Configures available line widths for Mosaic |
| **textOptions** | Object | {<br>color:globalColorOptions,<br>size: [16, 18, 20]<br>} | Configures available text colors and font sizes |
| **arrowOptions** | Object | {<br>color:globalColorOptions,<br>size: [4, 6, 8]<br>} | Configures available arrow colors and line widths |
| **initialRegion** | [Object](#initialRegion) | - | The configured region is automatically selected during initialization |
| **customDrawing** |  Array<br><[customDrawingObject](#customDrawingObject)>  | - | Custom drawings (see below) |

<a id="regionSizeIndicator"></a>

#### regionSizeIndicator
| Options | Type | Default | Description |
| --- | --- | --- | --- |
| **show** | Boolean | true | Whether the size indicator is shown |
| **color** | String | #ffffff | Size indicator color |
| **fontSize** | Number | 14 | Size indicator font size |

<a id="initialRegion"></a>

#### initialRegion
| Options | Type | Default | Description |
| --- | --- | --- | --- |
| **left** | Number | - | Initializes the horizontal starting position of the selection |
| **top** | Number | - | Initializes the vertical starting position of the selection |
| **width** | Number | - | Initializes the width of the selection |
| **height** | Number | - | Initializes the height of the selection |

<a id="customDrawingObject"></a>

#### customDrawingObject
| Options | Type | Description |
| --- | --- | --- |
| **className** | String | Custom class name for the drawing item |
| **optionsHtml** | String | Defines the HTML content for the secondary menu of the custom drawing item |
| **onOptionsCreated** | Function | This function is called when the secondary menu of the custom drawing item is created. The parameter allows access to the `secondary menu DOM object`. |
| **onDrawingOpen** | Function | This function is invoked when the custom drawing item is activated. Parameters provide access to the `canvas DOM object`,`secondary menu DOM object`, and a `function to save history`. Note: Please invoke the `function to save history` after each custom drawing action to ensure the undo feature of the plugin functions correctly. |
| **onDrawingClose** | Function | This function is called when the custom drawing item is closed.Parameters provide access to the `canvas DOM object`,`secondary menu DOM object`|

##### Code Example
```js
// "$" is from jquery.js
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
          saveCallback();// Call after each custom draw to ensure undo function works properly
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
### Event
| Event | Description |
| --- | --- |
| **screenshotGenerated** | Triggered upon screenshot completion; retrieves the `image base64 encoding` in callback |
| **screenshotDownload** | Triggered when the screenshot is downloaded; retrieves the `image base64 encoding` in callback |
| **regionDragging** | Triggered when the region size or position changes; retrieves `detailed region position info` |
| **regionDragStart** | Triggered before region size or position change; retrieves `detailed region position info` |
| **regionDragEnd** | Triggered after region size or position change; retrieves `detailed region position info` |
| **successCreated** | Triggered upon successful plugin initialization |
| **errorCreated** | Triggered on plugin initialization failure; receives an `error message` in callback |
| **closed** | Triggered when the plugin is closed |

#### Code Example
```js
let screenshot = new RegionScreenshot();
screenshot.on("successCreated",(dataUrl)=>{
	console.log("Plugin initialized successfully.");
});
screenshot.on("screenshotGenerated",(dataUrl)=>{
	console.log(dataUrl);
});
```
# 🎉Acknowledgements & References
I gratitude to the following open-source plugins, which have provided essential support for the functionality.
* [dom-to-image](https://github.com/tsayen/dom-to-image) A plugin to convert DOM nodes into images (used for text drawing).
* [jquery](https://github.com/jquery/jquery) A fast, concise JavaScript library (utilized for DOM selection and event binding).