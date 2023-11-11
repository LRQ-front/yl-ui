import Button from "@yl-ui/button";
import Icon from "@yl-ui/icon";
// import ButtonGroup from "../button-group/src/button-group.vue";
import ButtonGroup from "@yl-ui/button-group";

import Row from "@yl-ui/row";
import Col from "@yl-ui/col";

import { App } from "vue";
const components = [
  // 引入所有组件
  Button,
  Icon,
  ButtonGroup,
  Row,
  Col,
];
const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
export default {
  install, // 导出install方法
  ...components, //用于按需导入
};
