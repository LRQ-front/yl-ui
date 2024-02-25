# yl-ui-lib 组件库

## 快速开始

### 1.安装组件库

```bash
npm install yl-ui-lib
```

### 2.引用组件库

#### 全部引入

```javascript
import { createApp } from "vue";
import YUI from "yl-ui-lib";

import App from "./App.vue";
createApp(App).use(YUI).mount("#app");
```

#### 按需引入

按需引入需要借助`babel-plugin-component`

```bash
npm install babel-plugin-component -D
```

Vite

需要创建.babelrc 文件，并配置如下

```json
//.babelrc
{
  "plugins": [
    [
      "component",
      {
        "libraryName": "yl-ui-lib",
        "styleLibrary": {
          "name": "css",
          "base": false,
          "path": "[module].css" //yl-ui-lib/css/button.css
        },
        "libDir": "dist"
      }
    ]
  ]
}
```

vite.config.js 中引入 babel

```javascript
//vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import babel from "vite-plugin-babel";

// https://vitejs.dev/config/
export default defineConfig({
    ...
  plugins: [vue(), babel()],
  ...
});
```

Webpack

创建 babel.config.js ，添加如下配置

```javascript
module.exports = {
  ...
  plugins: [
    [
      "component",
      {
        libraryName: "yl-ui-lib",
        styleLibrary: {
          name: "css",
          base: false,
          path: "[module].css", //yl-ui-lib/css/button.css
        },
        libDir: "dist",
      },
    ],
  ],
};

```

接下来只需要在入口进行引入部分组件

```javascript
import { createApp } from "vue";
import { Button, Icon } from "yl-ui-lib";

import App from "./App.vue";
createApp(App).use(Button).use(Icon).mount("#app");
```
