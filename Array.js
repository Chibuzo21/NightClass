// ARRAYS
// it is a special varaiable that can hold more than one value at a time.
// it is a non-primitive data type, it makes use of square brackets-[]
// it makes use of index numbering system starting its count from 0

const List = [
  "banana",
  24,
  true,
  null,
  undefined,
  ["mango", "orange"],
  { age: 12 },
];
console.log(List[1]);

List[0] = "watermelon";
console.log(List);
// Length to calculate the number of items in an array
console.log(List.length);

// common Array methods
// -Adding and Removing items
// push adds to the end of your array
const fruits = ["guava", "pear"];
fruits.push("apple");
console.log(fruits);

// pop removes an item from the end
fruits.pop();
console.log(fruits);

// unshift adds an elemet to the beginning
fruits.unshift("lemon");
console.log(fruits);
// shift removes an item from the beginning
fruits.shift();
console.log(fruits);

// indexOf returns the index of an item in the array
console.log(fruits.indexOf("pear"));
// includes returns a boolean, it checks if an item is a part of an array
console.log(fruits.includes("tomatoes"));

// join converts an array to a string
console.log(fruits.join(" "));

// splice used for extracting the items in an array
const numbers = [2, 3, 4, 5, 6, 7];
// splice makes use of 2 parameters, the first one is the index from which to extract and the second one is the number of items to be extracted.
Extractednumbers = numbers.splice(1, 3);

// slice also makes use of 2 parameters, it can also be used to extract or delete
// the first parameter is the index to extract from and then you stop your extraction before the second parameter
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
console.log(letters.slice(2, 6));
console.log(letters);
