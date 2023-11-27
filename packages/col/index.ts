import { App } from "vue";
import Col from "./src/col.vue";
import "../theme-chalk/src/col.scss";
Col.install = (app: App) => {
  app.component(Col.name, Col);
};

export default Col;
