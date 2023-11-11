import { App } from "vue";
import Row from "./src/row.vue";

Row.install = (app: App) => {
  app.component(Row.name, Row);
};

export default Row;
