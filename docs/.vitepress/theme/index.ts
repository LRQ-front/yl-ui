import YUI from "yl-ui-lib";
import "yl-ui-lib/dist/css/index.css";
import DefaultTheme from "vitepress/theme";
import demo from "vitepress-demoblock/demo.vue";

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(YUI);
    app.component("demo", demo);
  },
};
