function main() {
  let container = document.createElement("div");
  let form = document.createElement("form");
  let input = document.createElement("input");
  let button = document.createElement("button");

  input.placeholder = "Enter your City...";
  input.id = "input";
  button.innerText = "Get Weather";
  form.id = "weatherForm";
  button.type = "Submit";

  form.appendChild(input);
  form.appendChild(button);
  container.appendChild(form);

  return container;
}

export { main };
