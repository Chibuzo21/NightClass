// LOOPING
// Loop allows you to execute a block of code repeatedly
// console.log(1)
//  basic types of looping
// for loop
// while loop
// do while loop
// for of, for in etc

// for loop is used when you know how many times you want to run a code

// SYNTAX
// for(initialization; condition; iteration-can be increment or decrement){executable block of code}


for (let i=1; i<5; ++i){
    console.log(`Number is ${i}`)
}
for(let b=10; b>6; b--){
    console.log(`${b} is a number`)
}
// while loop, you don't know the exact number of times, condition
let count=7;

while (count>3){
    console.log(`Count is ${count}`);
    count--;
}
// do while loop runs at least once before it checks the condition
let num=5

do{
    console.log(num)
    num++
}while(num<5)
    // this action console.log(num) was ran the first time because the do while loop runs the action first before it notices the condition.