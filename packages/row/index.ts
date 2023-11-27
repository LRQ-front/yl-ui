import { App } from "vue";
import Row from "./src/row.vue";
import "../theme-chalk/src/row.scss";
Row.install = (app: App) => {
  app.component(Row.name, Row);
};

export default Row;
