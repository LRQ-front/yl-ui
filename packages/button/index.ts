import { App } from "vue";
import Button from "./src/button.vue";
//在使用webpack打包整个组件库时才开启
// import "../theme-chalk/src/button.scss";

Button.install = (app: App): void => {
  app.component(Button.name, Button);
};
export default Button;
