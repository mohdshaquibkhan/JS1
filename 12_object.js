const tinderUser = new Object()     // it is singleton obeject
 // const tinderUser = {}         it is not a singleton obeject


  tinderUser.id = "110009"
  tinderUser.name = "Irfan"
  tinderUser.isloggedIn = false

 // console.log(tinderUser);

 const regularUser = {
    email: "kshaquib17@gmail.com",
    fullname:{

        userfullname:{
            firstname: "shaquib",
            lastname: "khan",

        }
    }
 }

//  console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1,obj2, obj4)

const obj3 = {...obj1, ...obj2}
console.log(obj3);



