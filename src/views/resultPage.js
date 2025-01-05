function resultPage() {
  const mainContainer = document.getElementById("main");
  mainContainer.innerHTML = `
    <div class="upper">
      <div id="backButtonContainer">
        <span id="backButton" class="material-symbols-outlined">
          undo
        </span>
      </div>
      <div id="upperInfo">
        <img id="weatherImg" src='https://fakeimg.pl/160x160'></img>
        <p id="cityName">BURGRES</p>
      </div>
    </div>
    <div class="lower">
      <p id="dateAndInfo">Today is 11/11 and Is gonna Rain</p>
      <p id="minTemp">Minimum Temperature 18 Cº</p>
      <p id="maxTemp">Maximum Temperature 34 Cº</p>
      <p id="prepProb">Precipitation Probability is 83%</p>
    </div>
    `;
}

export { resultPage };
