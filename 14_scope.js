//  scope

// Scope determines the accessibility (visibility) of variables.

//  JavaScript variables have 3 types of scope:
// Block scope : let and const
// Function scope
// Global scope


let a = 300                   // global scope  

if (true) {

let a = 10                       // block scope
const b = 20 
console.log("INNER: ", a);

}

 //console.log(a);
//console.log(b);


function one(){                                  //nested scope
             const username = "haniya"

             function two(){
                const websites = "youtube"
                console.log(username);
             }
           //  console.log(websites);

             two()
}                        

 // one()


if (true){
    const username = "haniya"
    if (username == "haniya"){
        const websites = " youtube"
        console.log(username + websites);
    }
}


           //******************************************************************************************************* */


function addone(num){
    return num+1
}
 // addone(23)
 console.log(addone(23));

























