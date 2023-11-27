import Icon from "./src/icon.vue";
import { App } from "vue";
import "../theme-chalk/src/icon.scss";
Icon.install = (app: App): void => {
  app.component(Icon.name, Icon);
};
export default Icon;
