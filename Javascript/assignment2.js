// ASSIGNMENT CORRECTION

// 1. Multiplication Table
// Using a for loop, log the multiplication table of any number entered by the user (from 1 to 12)
// let number = prompt("Enter a number");
// if (number.trim() === "" || isNaN(number)) {
//   alert("Invalid input, Please enter a valid number");
// } else {
//   number = Number(number);
//   for (let i = 1; i <= 12; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
//   }
// }

// 2. Simple Calculator Function
// Write a function calculator(num1, num2, operator) that takes two numbers and an operator (+, -, *, /) and returns the result

// step 1 declare the function
// function Calculator(num1, num2, opr) {
//   // step 2 check if the inputs are valid
//   if (
//     isNaN(num1) ||
//     isNaN(num2) ||
//     num1.trim() === "" ||
//     num2.trim() === "" ||
//     opr.trim() === ""
//   ) {
//     alert("Invalid input");
//   } else {
//     num1 = Number(num1);
//     num2 = Number(num2);

//     // step 3 check for the operator and perform the operation
//     if (opr === "+") {
//       return `${num1} + ${num2} = ${num1 + num2}`;
//     } else if (opr === "-") {
//       return `${num1} - ${num2} = ${num1 - num2}`;
//     } else if (opr === "*") {
//       return `${num1} x ${num2} = ${num1 * num2}`;
//     } else if (opr === "/") {
//       return `${num1} / ${num2} = ${num1 / num2}`;
//     }
//   }
// }
// // step 4 get user input
// let firstNum = prompt("Enter first number");
// let operator = prompt("Enter operator");
// let secondNum = prompt("Enter second number");

// // step 5 call the function and alert the result
// alert(Calculator(firstNum, secondNum, operator));

// 3.Write a function that takes a sentence (string) and returns an array of words
// split is a string method that converts a string into an array
// const stringToArray = (str) => {
//   console.log(str.split(" "));
// };
// let sentence = prompt("Enter a sentence");

// stringToArray(sentence);

// 4. Create a function that takes an array of words and joins them into a single string seperated by -
// join is an array method that converts an array into a string
const arrayToString = (arr) => {
  return arr.join("-");
};
let fruits = ["apple", "coconut", "pear", "watermelon", "banana", "orange"];
console.log(arrayToString(fruits));
