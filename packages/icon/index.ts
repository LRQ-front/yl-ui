import Icon from "./src/icon.vue";
import { App } from "vue";
//在使用webpack打包整个组件库时才开启
// import "../theme-chalk/src/icon.scss";
Icon.install = (app: App): void => {
  app.component(Icon.name, Icon);
};
export default Icon;
