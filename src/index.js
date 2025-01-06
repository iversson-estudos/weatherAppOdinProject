import "./styles.css";
import { mainView } from "./views/mainView";
import { requestAPI } from "./API/request";
import { filterData } from "./API/filterData";

mainView();

const response = requestAPI("Cascavel").then((result) => {
  const filteredData = filterData(result);
  console.log(filteredData);
});
