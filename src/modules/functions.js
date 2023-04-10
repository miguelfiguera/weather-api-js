function processData(data) {
  return {
    name: data.location.name,
    region: data.location.region,
    country: data.location.country,
    cloud: data.current.cloud,
    termSensation: data.current.feelslike_c,
    temp: data.current.temp_c,
    humidity: data.current.humidity,
    windDirection: data.current.wind_dir,
    windSpeed: data.current.wind_kph,
  };
}

async function hitTheApi(location) {
  const apiKey = "1fa94fb900eb444ca0444415230804";
  let lowerCase = location.toLowerCase();
  const weather = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lowerCase}`,
    { mode: "cors" }
  );
  const response = await weather.json();
  //console.log(response)
  return response;
}

function DOMelements(obj) {
  // iterate over the object to create DOM elements
  //that uses the key and the value as inner text
  //then return that
}

export { hitTheApi, processData, DOMelements };
