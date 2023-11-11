# 快速开始

### 安装组件库

```bash
npm i yl-ui-lib
```

### 用法

##### 全部引入

```javascript
import { createApp } from "vue";
import "yl-ui-lib/dist/css/index.css";
import YUI from "yl-ui-lib";

import App from "./App.vue";
createApp(App).use(YUI).mount("#app");
```

##### 按需引入

```javascript
import { createApp } from "vue";
import "yl-ui-lib/dist/css/button.css";
import { Button } from "yl-ui-lib";

import App from "./App.vue";
createApp(App).use(YUI).mount("#app");
```
