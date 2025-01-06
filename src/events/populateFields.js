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
  /*ICON */
  const icon = document.getElementById("weatherIcon");

  /*POPULATE THEM */
  conditions.textContent = "Today is " + response.conditions.toLowerCase();
  minTemp.textContent = "Minimum temperature: " + response.minTemp;
  maxTemp.textContent = "Maximum temperature: " + response.maxTemp;
  precProb.textContent = "Probability of precipitation: " + response.precProb;
  address.textContent = response.address;
  icon.textContent = "partly_cloudy_day";
}
export { populateFields };
