// Variable is used in javascript to store data
// variable declaration = var, let, const
let Course = "Javascript";

console.log(Course);
Course = 98;
console.log(Course);

const Age = 32;
// Age = 40 is wrong, you cannot assign to a constant variable;
console.log(Age);
// Data Types = 8
// Primitive Data type
// String- "",'',``
let Name = "Emeka";
let Class = "Primary";
let LGA = `Aba North`;
// Number - float, integer
// float means decimal
const decimal = 8.2;
// integer
let age = 90;
let num = "90";
console.log(typeof age);
// Boolean= true or false
let condition = true;
let state = false;
// Undefined = is when a variable is not defined or given any value
let Case;
console.log(Case);
let Means = undefined;
// Null
let law = null;
// Symbol
const sym1 = Symbol();
const sym2 = Symbol();
console.log(sym1 === sym2);
// Non Primitive Data type - can be used to store a group of data
// Object
// - stores data as properties.
// -uses the key-value pair
// -uses curly braces
const group = {
  name: "Chika",
  age: 90,
  status: undefined,
  info: {
    detail: "missing",
  },
  fruits: ["orange"],
};
// to access the data in an object, you can use the dot notation or the bracket notation
// dot notation
console.log(group.age);
// bracket notation
console.log(group["name"]);

console.log(group.name + " " + "is " + group.age + "years " + "old");
console.log(`${group.name} is ${group.age} years old`);
console.log(group.info.detail);
// Array
// -it makes use of index
// makes use of square brackets
const foodstuffs = ["yam", 40, undefined, true, null, { count: 1 }, ["messi"]];
console.log(foodstuffs[3]);
