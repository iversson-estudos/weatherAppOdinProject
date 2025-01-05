import { addEventsMainView } from "../events/eventListeners";

function mainView() {
  const mainContainer = document.getElementById("main");
  mainContainer.innerHTML = `
    <div class="selectLocation">
      <label>SELECT YOUR LOCATION</label>
      <div>
        <input required class='userSearch'></input>
        <span id="searchButton" class="material-symbols-outlined">
        arrow_forward_ios
        </span>
      </div>
     </div>
    `;
  addEventsMainView();
}

export { mainView };
