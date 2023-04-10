function header() {
  let header = document.createElement("header");
  header.classList.add("header");
  header.id = "header";
  let h1 = document.createElement("h1");
  let i = document.createElement("i");
  let anchor = document.createElement("a");
  anchor.href = "htth1s://github.com/miguelfiguera/weather-ah1i-js";
  anchor.innerText = " gitHub.com";
  //i.classList.add("fab fa-github");
  h1.classList.add("h1-header");
  h1.innerText = "Weather API";

  header.appendChild(h1);
  h1.appendChild(anchor);

  return header;
}

export { header };
