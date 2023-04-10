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
  let container = document.createElement("div"); //or dialog, lets see.
  container.id = "weatherResponse";
  let pName = document.createElement("p");
  let pRegion = document.createElement("p");
  let pCountry = document.createElement("p");
  let pCloud = document.createElement("p");
  let pTermSensation = document.createElement("p");
  let pTemp = document.createElement("p");
  let pHumidity = document.createElement("p");
  let pWindDirection = document.createElement("p");
  let pWindSpeed = document.createElement("p");
  let buttonClose=document.createElement('button')
  buttonClose.innerText='Close'

  buttonClose.addEventListener('click',()=>{
    let form = document.getElementById("weatherForm");
    form.classList.remove('hidden')
    container.remove()
  })

  let arr = [
    pName,
    pRegion,
    pCountry,
    pCloud,
    pTermSensation,
    pTemp,
    pHumidity,
    pWindDirection,
    pWindSpeed,
    buttonClose
  ];

  arr.forEach((e) => container.appendChild(e));

  pName.innerText=`Name: ${obj.name}`
  pRegion.innerText=`Region: ${obj.region}`
  pCountry.innerText=`Country: ${obj.country}`
  pCloud.innerText=`Cloud ${obj.cloud}`
  pTermSensation.innerText=`Term Sensation: ${obj.termSensation}`
  pTemp.innerText=`Temp (celsius): ${obj.temp}`
  pHumidity.innerText=`Humidity: ${obj.humidity}`
  pWindDirection.innerText=`Wind Direction: ${obj.windDirection}`
  pWindSpeed.innerText=`Wind Speed: ${obj.windSpeed}`

  let body = document.getElementsByTagName("body");
  container.classList.add('hidden')
  body[0].appendChild(container);


}

export { hitTheApi, processData, DOMelements };
