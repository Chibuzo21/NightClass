// operators are symbols that perform operations on operands(values or variables)
// TYPES OF OPERATORS
// Arithmetic Operators for performing mathematical operations eg -,+,/,*,**,%,++,--
let a = 3;
let b = 4;
let c = a - b;
console.log(c);
// % means remainder
console.log(5 % 3);
// ++ means increment
// pre-increment adds one to the variable where it is used
let p = 4;
console.log(++p);
// post-increment adds one after the increment has been declared
let y = 6;
console.log(y++);
console.log(y + 2);
// pre-decrement
let g = 4;
console.log(--g);
// post-decrement
let h = 7;
console.log(h--);
// Comparison Operators returns a boolean and its used for making comparisons. eg >,<,==,===,!=,!==,>=,<=
let j = 10;
let m = 20;
console.log(m % j > j);
let k = m / j;
console.log(k >= 2);
// == checks only for value while === checks for both data type and value
let z = "2";
let n = 2;
console.log(z == n);
true;
console.log(z === n);
false;
// != checks for value  and !== checks for both data type and value. both are negative
console.log(z != 1 + 1);
false;
console.log(z !== n);
true;
// Logical Operators AND(&&),OR(||),NOT(!) return a boolean
// AND returns true when the all sides (operands) are true and returns false if any of the sides is false
const And = 3 > 2 && 5 > 8 && 1 < 4;
console.log(And);
let And2 = 1 < 3 && 2 > 0;
console.log(And2);

// oR (||) returns true when either of the sides is true and returns false when all of the sides is false
let q = 6 / 3;
const OR = q > 5 || q == 2;
true;
console.log(OR);
const OR2 = q < 1 || q == 0;
false;
// NOT(!) is inverse
const fellow = !true;
console.log(fellow);
false;
const condition = !(3 > 4);
// 3 is not greater than 4, so it returns false but because of the NoT sign (!) in front of it, it inverts it to be true
console.log(condition);
true;
// Assignment Operators are used for asignining values to variables eg =,+=,-=,/=,*= etc
let Emma = "Roy";
let v = 3;
v += 1;
// v = v+1 is the same as v+=1
console.log(v);
let w = 8;
w -= 4;
console.log(w);
