// DOCUMENT OBJECT MODEL
// DOM is a  programming interface for HTML and XML documents. It is used by Javascript to model the structure of a document. it sees this document as an object with properties and methods that can be manipulated. This DOM represents the document as a tree of nodes. This tree consists of parent nodes, child nodes and sibling nodes.
// In simple terms, DOM is a way for javascript to interact with HTML and CSS.

// Methods used by DOM, can also be called Selectors
// getElementsByTagName
const Heading = document.getElementsByTagName("h1");
const list = document.getElementsByTagName("li");
// innerText
console.log(Heading[0].innerText);
console.log(list[0].innerText);
// innerText will not show hidden texts

// textcontent
console.log(list[0].textContent);
// textcontent will show hidden texts

// innerHTML
console.log(list[0].innerHTML);

// outerHTML
const p1 = document.getElementsByTagName("p");
console.log(p1[0].outerHTML);

// getElementById retrieves element by their id
const secondP = document.getElementById("p2");
console.log(secondP.textContent);

// getElementsByClassName retieves element by their class name
const ThirdP = document.getElementsByClassName("p3");
console.log(ThirdP[1].innerHTML);

// querySelector is the most modern way to retrieve elements
const Psecond = document.querySelector("#p2");
console.log(Psecond.outerHTML);

const Pthird = document.querySelector(".p3");
const firstli = document.querySelector("li");

// querySelectorAll is used to select multiple elements
const AllP = document.querySelectorAll("p");
console.log(AllP[2].innerText);

AllP.forEach((p) => console.log(`Hello Chairman, ${p.textContent}`));
