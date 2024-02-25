import ButtonGroup from "./src/button-group.vue";
import { App } from "vue";
//在使用webpack打包整个组件库时才开启
// import "../theme-chalk/src/button-group.scss";
ButtonGroup.install = (app: App) => {
  app.component(ButtonGroup.name, ButtonGroup);
};

type IWithInstall<T> = T;
const _ButtonGroup: IWithInstall<typeof ButtonGroup> = ButtonGroup;
export default _ButtonGroup;
