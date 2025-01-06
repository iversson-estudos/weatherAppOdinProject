async function requestAPI(location) {
  const API_KEY = "key=XAXKJGDHVWDBKJU32TKC7BJ8K";
  const API_URL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  const unitGroup = "unitGroup=metric";
  const include = "include=days";
  const contentType = "contentType=json";

  const query =
    API_URL +
    location +
    "?" +
    unitGroup +
    "&" +
    include +
    "&" +
    API_KEY +
    "&" +
    contentType;

  try {
    const response = await fetch(query, {
      method: "GET",
      headers: {},
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export { requestAPI };
