const Form = document.querySelector("form");
const Input = document.querySelector("input");
const TodoContainer = document.querySelector("#container");

const SubmitFn = (event) => {
  event.preventDefault();
  const todo = Input.value.trim();
  if (todo !== "") {
    const P = document.createElement("p");
    P.textContent = todo;
    TodoContainer.appendChild(P);
    P.classList.add("todoStyle");

    Input.value = "";
  }
};
Form.addEventListener("submit", SubmitFn);
