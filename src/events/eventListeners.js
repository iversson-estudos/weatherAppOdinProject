import { resultPage } from "../views/resultPage";

function addEventsMainView() {
  const span = document.getElementById("searchButton");
  span.addEventListener("click", () => {
    resultPage();
  });
}

export { addEventsMainView };
