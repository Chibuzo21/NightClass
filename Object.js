// OBJECTS
// object is a data type that is used to store collections of related data and more complex entities. While an array stores ordered collections of values (because of its index), objects store unordered collection of properties which are in key-value pair. it makes use of curly braces.

let person = {
  name: "Obinna",
  age: 25,
  status: undefined,
  fruits: ["apple", "orange"],
  class: {
    first: "javascript",
  },
};
// Retrieving values from an object
// dot notation
console.log(person.name);
console.log(person.class.first);
console.log(person.fruits[1]);

// Bracket notation
console.log(person["status"]);

// Objects can also have functions as properties and these functions are called method
let group = {
  //   men: function () {
  //     return "This group is for men";
  //   },
  men() {
    return "This group is for men";
  },
};
console.log(group.men());
// this keyword refers to the object that is calling the method,it does not apply to arrow functions

const user = {
  name: "Chioma",
  age: 56,
  greet() {
    return `${this.name} is ${this.age} years old`;
  },
};
console.log(user.greet());
// Object Methods
// Object.keys creates an array using the keys in the object
console.log(Object.keys(user));
// Object.values creates an array using the values in the object
console.log(Object.values(person));
// Object.entries creates an array using both the keys and values in an object
console.log(Object.entries(person));
// They all help to convert an object into an array

// Looping in objects
// for in

let car = {
  brand: "Ford",
  color: "Black",
  year: 2019,
};
for (let key in car) {
  console.log(`The ${key} of the car is ${car[key]}`);
}
