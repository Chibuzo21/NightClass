// CONTROL STRUCTURES are tools used to control how javascript executes blocks of codes. 
// Conditional statement: conditions on which javascript actions are carried out.

// IF statement
// if(condition){action or code execution}
const result = 2*3
if(result>5){
    console.log(`${result} is greater than 5`)
}
// if else
    if(result<3){
        console.log(`${result} is less than 3`)
    }else{
        console.log(`${result} is greater than 3`)
    }
// if else if else
if(result===3){
    console.log('3 is result')
}else if(result>10){
    console.log(`${result} is less than 10`)
}else{
    console.log('last option')
}
// TERNARY OPERATOR
// condition ? codeexecution when condition is true : codeexecution when condition is false
// let question=prompt("What is the name of our President")

//  question==="Tinubu"?alert("You are right"): alert("You are wrong")
// SWITCH CASE
const day ="Tuesday"
switch(day){
    case "Monday":
        console.log("today is Monday");
        break;
    case "Tuesday":
        console.log("today is Tuesday")   ;
        break
        case "Wednesday":
        console.log("today is Wednesday")   ;
        break;
    default:console.log("Today no just follow")

}
// Looping