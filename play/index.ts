import { createApp } from "vue";

// import YUI from "yl-ui-lib2";
// import "theme-chalk/src/index.scss";
// import "../dist/css/index.css";
// import "yl-ui-lib2/dist/css/index.css";

//测试样式
import YUI from "../packages/yl-ui";
import "../dist/css/index.css";

//测试单个组件导入
// import Button from "../dist/button.umd.js";
// import Icon from "../dist/icon.umd.js";

//测试导入主入口
// import YUI from "../dist/yl-ui.umd.js";

import app from "./App.vue";
createApp(app).use(YUI).mount("#app");
