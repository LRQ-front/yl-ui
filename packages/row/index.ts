import { App } from "vue";
import Row from "./src/row.vue";
//在使用webpack打包整个组件库时才开启
// import "../theme-chalk/src/row.scss";
Row.install = (app: App) => {
  app.component(Row.name, Row);
};

export default Row;
