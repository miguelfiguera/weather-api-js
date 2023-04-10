import _ from "lodash";
import { main } from "./modules/main.js";
import { header } from "./modules/header.js";
import { hitTheApi, processData, DOMelements } from "./modules/functions";

const LoadingBody = (() => {
  let theHeader = header();
  let theMain = main();
  let body = document.getElementsByTagName("body");
  body[0].appendChild(theHeader);
  body[0].appendChild(theMain);
})();

const buttonEventListener = (() => {
  let form = document.getElementById("weatherForm");
  let input = document.getElementById("input");
  let theObj = {};
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    hitTheApi(input.value)
      .then((data) => processData(data))
      //.then((obj)=>{theObj=obj})
      .then((x) => console.log(x))
      .catch((e) => console.log(e));
  });
})();
