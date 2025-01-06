import "./styles.css";
import { mainView } from "./views/mainView";
import { requestAPI } from "./API/request";
import { jsonToObject } from "./API/jsonToObject";

mainView();

const response = requestAPI("Cascavel").then((result) => {
  console.log(result);
});
