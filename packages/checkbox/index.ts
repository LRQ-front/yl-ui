import { App } from "vue";
import Checkbox from "./src/checkbox.vue";
//在使用webpack打包整个组件库时才开启
// import "../theme-chalk/src/checkbox.scss";

Checkbox.install = (app: App): void => {
  app.component(Checkbox.name, Checkbox);
};
export default Checkbox;
