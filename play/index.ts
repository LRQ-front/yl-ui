import { createApp } from "vue";

import YUI from "yl-ui";
import "theme-chalk/src/index.scss";

import app from "./App.vue";
createApp(app).use(YUI).mount("#app");
