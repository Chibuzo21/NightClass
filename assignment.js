let Name = prompt("Enter your name");
let Age = prompt("Enter your age");
let favoriteNum = prompt("Enter your favorite number")


// 1) CHECK FOR EMPTY FIELDS
// trim is a string method that removes whitespaces from the beginning and end of a string
  if(Name.trim()===""|| Age.trim()===""|| favoriteNum.trim()===""){
    alert("Please fill up all the empty fields")
 }
  else {

// 2)CONVERT AGE AND FAVORITENUM TO NUMBERS
    // Number() is a method that converts a numerical value in string to a number data type
    Age = Number(Age)
    favoriteNum=Number(favoriteNum)

// 3) ENSURE THAT AGE AND FAVORITENUM ARE NUMBERS USING ISNAN
    // IsNAN (is NOT A Number) is a number method that checks if a value is a number. 
    if(isNaN(Age) || isNaN(favoriteNum)){
        alert("Please enter a valid number")
    }
    else{
    // 4) CHECK IF THE PERSON IS AN ADULT USING AGE VARIABLE
    if(Age>=18){
        alert(`Hello ${Name}, you are an adult`)
    }
    else if(Age<18){
        alert(`Hello ${Name}, you are a minor`)
    }

    // 5) CHECK IF FAVORITENUM IS AN ODD OR EVEN NUMBER
    if (favoriteNum % 2 ===0){
        alert('Your favorite number is even')
    }
    else{
        alert('Your favorite number is odd')
    }

    // 6) CHECK IF FAVORITENUM IS GREATER THAN 100
    if(favoriteNum > 100){
        alert("Wow!, That's a big number!")
    }
    }
      }