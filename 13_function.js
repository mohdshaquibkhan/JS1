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

 // console.log(loginUserMessage())

 
function calculateCartPrice(...num1)                  // (...num1)  is know as rest or spread operator
                
{       
    return num1

}

//  console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "irfan",
    price: 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user)                                    // function call


handleobject({                                           // object pass
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 500]                        // array pass

function returnSecondValue(getArray){                     // function deffined

      return getArray[2]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([100, 400, 600, 700]));