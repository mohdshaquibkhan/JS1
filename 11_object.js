// objects
 
// object literals is an approach to declare the object

// object.create         its known as construtor   & inside that construtor singleton is made

const mySym = Symbol("key1")

const JsUser = {
    name : "Shaquib",
    "full Name" : "Mohd Shaquib Khan",
    [mySym] : "myKey1",
    age : 20,
    location : "Ajmer",
    email : "kshaquib45@gmail.com",
    isloggedIn : false,
    lastLoginDays : ["Monday", "Saturday", "Sunday"] 
}  // object created

console.log(JsUser.email)

console.log(JsUser["email"])
 
console.log(JsUser["full Name"])
console.log(JsUser[mySym])
Object.freeze(JsUser)  // object.freeze is used to lock the value   it means that no changes were occurs 
console.log(JsUser)