import Button from "@yl-ui/button";

import { App } from "vue";
const components = [
  // 引入所有组件
  Button,
];
const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
export default {
  install, // 导出install方法
};
