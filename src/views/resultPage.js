import { addEventsResultPage } from "../events/eventListeners";
import { populateFields } from "../events/populateFields";

function resultPage() {
  const mainContainer = document.getElementById("main");
  /*SAVES LOCATION TO CALL SEARCH */
  const location = document.getElementsByClassName("userSearch")[0].value;

  /* VIEW WITHOUT FIELDS POPULATED */
  mainContainer.innerHTML = `
    <div class="upper">
      <div id="backButtonContainer">
        <span id="backButton" class="material-symbols-outlined">
          undo
        </span>
      </div>
      <div id="upperInfo">
      <span id="weatherIconContainer" class="material-symbols-outlined">
          <span id="weatherIcon"></span>
      </span>

        <p id="address"></p>
      </div>
    </div>
    <div class="lower">
      <p id="conditions"></p>
      <p id="minTemp"></p>
      <p id="maxTemp"></p>
      <p id="precProb"></p>
    </div>
    `;

  /*POPULATE THE FIELDS */
  populateFields(location);
  /*ADD EVENTS LISTENERS */
  addEventsResultPage();
}

export { resultPage };
