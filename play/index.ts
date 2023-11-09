import { createApp } from "vue";

// import YUI from "yl-ui-lib2";
// import "theme-chalk/src/index.scss";
// import "../dist/css/index.css";
// import "yl-ui-lib2/dist/css/index.css";

import YUI from "../packages/yl-ui";
import "../dist/css/index.css";

import app from "./App.vue";
createApp(app).use(YUI).mount("#app");
