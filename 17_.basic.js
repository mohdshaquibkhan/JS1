
 // const temperature = 54

 // if(temperature < 50){
   // console.log('temperature is less than 50');
 //  }
 // else{

    // console.log("tempertaure is greater than 50");
// }



//const balance = 1000

// if(balance < 500){
    // console.log("less than 500");
 // }
 // else if(balance < 700){
    //console.log("less than 700");
// }
// else if(balance < 900)
// {
    // console.log("less than 900");
// }
// else{
   // console.log("less than 1200");
// }



const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInfromEmail = true

if(userloggedIn && debitCard){
    console.log("allow to buy courses");
}
if(loggedInFromGoogle || loggedInfromEmail){
    console.log("user logged in");
}