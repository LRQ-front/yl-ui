import YUI from "yl-ui-lib";
import "yl-ui-lib/dist/css/index.css";

import theme from "vitepress/theme";
import "vitepress-theme-demoblock/dist/theme/styles/index.css";
// Demo组件和DemoBlock是两个vue组件，等会我们要在md文件中使用他来展示组件
import Demo from "vitepress-theme-demoblock/dist/client/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/dist/client/components/DemoBlock.vue";

import "./style.css";

export default {
  ...theme,
  enhanceApp: async ({ app }) => {
    app.use(YUI);
    app.component("Demo", Demo);
    app.component("DemoBlock", DemoBlock);
  },
};
