import { resultPage } from "../views/resultPage";
import { mainView } from "../views/mainView";

function addEventsMainView() {
  const span = document.getElementById("searchButton");
  span.addEventListener("click", () => {
    resultPage();
  });
}

function addEventsResultPage() {
  const backButton = document.getElementById("backButton");
  backButton.addEventListener("click", () => {
    mainView();
  });
}

export { addEventsMainView, addEventsResultPage };
