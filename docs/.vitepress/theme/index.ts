import YUI from "yl-ui-lib";
import "yl-ui-lib/dist/css/index.css";

// import YUI from "../../../packages/yl-ui/index.ts";
// import "../../../packages/theme-chalk/src/index.scss";

import theme from "vitepress/theme";
import "vitepress-theme-demoblock/dist/theme/styles/index.css";
// Demo组件和DemoBlock是两个vue组件，等会我们要在md文件中使用他来展示组件
import Demo from "vitepress-theme-demoblock/dist/client/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/dist/client/components/DemoBlock.vue";

//引入演示的组件
import Icons from "../../demoComponents/icons.vue";

import "./style.scss";

export default {
  ...theme,
  enhanceApp: async ({ app }) => {
    app.use(YUI);
    app.component("Demo", Demo);
    app.component("DemoBlock", DemoBlock);
    app.component("Icons", Icons);
  },
};
