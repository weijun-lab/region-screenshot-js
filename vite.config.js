import { resolve } from "path";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
export default defineConfig({
  root: "./examples",
  base: "./", // 确保 base 是相对路径，以保持正确的资源加载
  build: {
    minify: true,
    outDir: "../dist", // 指定构建输出目录为根目录下的 dist 文件夹
    lib: {
      entry: resolve(__dirname, "./src/region-screenshot.js"),
      name: "RegionScreenshot", //全局变量名称
      fileName: "region-screenshot",
      cssCodeSplit:false,
    },
    rollupOptions: {
      output: {
        chunkFileNames: "src/[name].js", // 按需加载模块的命名规则
        assetFileNames: "region-screenshot[extname]", // 静态资源（包括CSS）的命名规则
      },
    },
  },
  plugins: [cssInjectedByJsPlugin({topExecutionPriority: false})],//css内联至js
  server: {
    open: true,
    host: "0.0.0.0",
  },
});

 

