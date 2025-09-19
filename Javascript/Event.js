// EVENTS AND EVENT LISTENERS
// Events are actions or occurence that happen in the browser, which we can respond to. eg clicking, submit, change, mouseover etc

// TYPES OF EVENTS
// Mouse Events - click, dblclick, mouseover, mouseout etc
// Keyboard Events - keydown, keyup
// Form Events - submit, change, focus, blur etc
// Window Events - load, resize, scroll

// EVENT LISTENERS is a code that listens for a specific event on an element and runs a function when that event happens. It connects the event to the function. This function is called event handler. the two types of event listener is addEventListener and removeEventListener.

// syntax
// Element.eventlistener(event, eventhandler)
const Button = document.querySelector(".FirstBtn");

function clickFn() {
  alert("This button was clicked");
}

Button.addEventListener("click", clickFn);

const FirstDiv = document.querySelector("#div1");
FirstDiv.style.backgroundColor = "blue";

const Button2 = document.querySelector("#SecondBtn");

function ColorChange() {
  //   FirstDiv.style.backgroundColor = "orange";
  if (FirstDiv.style.backgroundColor === "blue") {
    FirstDiv.style.backgroundColor = "orange";
  } else if (FirstDiv.style.backgroundColor === "orange") {
    FirstDiv.style.backgroundColor = "red";
  } else {
    FirstDiv.style.backgroundColor = "blue";
  }
}
Button2.addEventListener("mouseenter", ColorChange);

// removeEventListener - helps to remove or disable the addEventListener
const Button3 = document.querySelector("#ThirdButton");

function Disable() {
  Button.removeEventListener("click", clickFn);
  Button2.removeEventListener("mouseenter", ColorChange);
}
Button3.addEventListener("click", Disable);
