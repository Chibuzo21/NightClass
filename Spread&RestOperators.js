// SPREAD AND REST OPERATORS
// ES means Ecmascript
// Spread and rest operators are part of ES6 features. They are represented by three dots (...)

// Spread operator is used to expand or bring out elements. They are used when building something new (arrays,objects,arguments).
// Arrays
let numbers = [1, 2, 3, 4, 5];
let newNumbers = [...numbers, 6, 7];

let months = ["July", "August", "September"];
let nextMonths = ["April", "May", "June", ...months];
console.log(nextMonths);
// Objects
const obj = {
  a: 1,
  b: 2,
  C: 3,
};
const newObj = {
  ...obj,
  d: 4,
  e: 5,
};
console.log(newObj);
// REST OPERATOR helps to collect multiple elements into an array. They gather the remaining items. it is used to pack items together. They help in destructuring
// Array
const [first, second, ...rest] = [20, 40, 60, 80, 100];
console.log(rest);
// Object
const { a, ...others } = { a: 10, b: 20, c: 30, d: 40 };
console.log(others.c);
// Destructuring of objects and Arrays
// Destructuring is a way to unpack values from arrays or objects into variables.
// Arrays
const Myfavoritefruit = ["apple", "cherry", "banana"];
const [fr1, fr2, fr3] = Myfavoritefruit;
console.log(fr3);
// Objects
const student = {
  Name: "John",
  age: 32,
  job: "cleaner",
};
console.log(student.Name);
const { Name, age, job } = student;
console.log(Name);
