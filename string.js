// STRING
// A string is a sequence of characters enclosed in quotes.
// single quotes, double quotes or backticks(template literals)
let firstname = "Umunna";

// Basic string operations
let surname = "Adaobi";
// Concatenation
let fullname = firstname + " " + surname;
console.log(fullname);
console.log("Hello" + "  " + surname);
// template literals - backtick
let greeting = `Hello ${firstname} ${surname}`;
console.log(greeting);

// length
let Class = "javascript";
console.log(Class.length * 20);
// string makes use of index counting in number system
console.log(Class[2]);

// common string methods
let word = "Hello World";
// toUpperCase
console.log(word.toUpperCase());
// toLowercase
console.log(word.toLowerCase());

// indexOf
console.log(word.indexOf("W"));
//includes returns a boolean
console.log(word.includes("emma"));
// Startswith
console.log(word.startsWith("Obi"));
false;
// endswith
console.log(word.endsWith("ld"));
true;
// replace
let newText = word.replace("World", "Jumoke");
console.log(newText);
// trim
let identity = "                             Obinna       ";
console.log(identity.trim());
// split helps to convert from string to array
console.log(word.split(""));

// -----
// join
// substring
// substr
// slice etc
