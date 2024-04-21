// function 

function sayMyName() {

 console.log("s");
console.log("h");
console.log("a");
console.log("q");
console.log("u");
console.log("i");
console.log("b");
    
}

// sayMyName()

function addTwoNumbers(number1, number2)
{
  //  let result = number1 + number2
   // console.log("haniya");
   // return result

   return number1 + number2

}

addTwoNumbers(499,765)      // call the function 

const result = addTwoNumbers(3, 5)

 // console.log("Result: ", result);


 function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return

    }
    return `${username} just logged in`
 }

 console.log(loginUserMessage())

