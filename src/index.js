import "./styles.css";
import { mainView } from "./views/mainView";
import { requestAPI } from "./API/request";

mainView();

console.log(requestAPI("Tocantins"));
