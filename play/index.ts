import { createApp } from "vue";

//测试npm包
// import YUI from "yl-ui-lib";
import "yl-ui-lib/dist/css/index.css";

//开发测试
// import YUI from "../dist/yl-ui.umd.js";
// import "../dist/css/index.css";

//测试单个组件导入
// import Button from "../dist/button.umd.js";
// import Icon from "../dist/icon.umd.js";

// //测试未打包的组件
// import YUI from "../packages/yl-ui/index";
// import "../packages/theme-chalk/src/index.scss";

//测试按需引入
// import { Button } from "yl-ui-lib";
// import { ButtonGroup } from "../dist/yl-ui.umd.js";

// import Button from "yl-ui-lib/dist/button.umd.js";

// import { Button } from "yl-ui-lib";
// import YUI from "yl-ui-lib";

//使用npm link测试
// import YUI from "yl-ui-lib";
// import { Button, Icon, Row, Col } from "yl-ui-lib";
// import { Icon } from "yl-ui-lib";
// console.log(Button);
import YUI from "yl-ui";
import "../packages/theme-chalk/src/index.scss";

import app from "./App.vue";
// createApp(app).use(Button).use(Icon).use(Row).use(Col).mount("#app");
createApp(app).use(YUI).mount("#app");
