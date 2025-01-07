function weatherIconPicker(icon) {
  /*ICON */
  const iconContainer = document.getElementById("weatherIcon");

  if (icon.includes("rain")) {
    iconContainer.textContent = "rainy";
  } else if (icon.includes("cloud")) {
    iconContainer.textContent = "partly_cloudy_day";
  } else if (icon.includes("clear")) {
    iconContainer.textContent = "sunny";
  } else if (icon.includes("snow")) {
    iconContainer.textContent = "snowing";
  } else {
    iconContainer.textContent = "bedtime";
  }
}

export { weatherIconPicker };
