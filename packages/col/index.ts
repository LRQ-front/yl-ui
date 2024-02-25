import { App } from "vue";
import Col from "./src/col.vue";
//在使用webpack打包整个组件库时才开启
// import "../theme-chalk/src/col.scss";
Col.install = (app: App) => {
  app.component(Col.name, Col);
};

export default Col;
