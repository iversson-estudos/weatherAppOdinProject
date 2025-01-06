import { filterData } from "../API/filterData";
import { requestAPI } from "../API/request";

async function populateFields(location) {
  /*REQUEST DATA*/
  const response = await filterData(await requestAPI(location));
  /*GETS FIELDS */
  const conditions = document.getElementById("conditions");
  const minTemp = document.getElementById("minTemp");
  const maxTemp = document.getElementById("maxTemp");
  const precProb = document.getElementById("precProb");
  const address = document.getElementById("address");

  /*POPULATE THEM */
  conditions.textContent = response.conditions;
  minTemp.textContent = response.minTemp;
  maxTemp.textContent = response.maxTemp;
  precProb.textContent = response.precProb;
  address.textContent = response.address;
}
export { populateFields };
