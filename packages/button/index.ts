import { App } from "vue";
import Button from "./src/button.vue";
import "../theme-chalk/src/button.scss";

Button.install = (app: App): void => {
  app.component(Button.name, Button);
};
export default Button;
