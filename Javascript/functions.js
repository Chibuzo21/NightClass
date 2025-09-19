// FUNCTIONS
// functions are blocks of codes that perform specific tasks. They are reusable
//3 types of functions

//1. FUNCTION DECLARATION makes use of function keyword
// syntax = function functionName(parameter){block of code}

// -declaring a function
function MyName() {
  console.log("my name is Obi");
}
// calling a function is invoking the function
MyName();

// 2. FUNCTION EXPRESSION defines the function as a variable,
const greet = function () {
  console.log("Hi there");
};
// anonymous function does not have name
greet();

// parameters and arguments
// parameters are placeholders for the values you use in the function

function Add(a, b) {
  console.log(a + b);
}

Add(5, 6);
// arguments are the actual value passed

// 3. ARROW FUNCTIONS
const Subtract = (c, d) => {
  console.log(c - d);
};
console.log(Subtract(19, 1) * 2);

Subtract(20, 12);

// return statement helps to send a value back
function Multiply(g, h) {
  return g * h;
}

console.log(Multiply(3, 4) * 5);

// Callback functions is a function that is passed into another function as an argument

function Sayhi(name, welcome) {
  console.log(`Hello ${name}`);
  welcome();
}
function afterGreet() {
  console.log("Welcome home");
}
Sayhi("Emeka", afterGreet);
