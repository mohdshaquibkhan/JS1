
const user = {
            username: "hitesh",
            price: 999,

            welcomeMessages: function(){
                console.log(`${this.username}, welcome to websites`);
                //console.log(this);
            }

}
//user.welcomeMessages()
//user.username = "sam"
//user.welcomeMessages()

//console.log(this);


//     function chai(){
 //     let username = "haniya"
 //   console.log(this);
//   }

//   chai() 



// function delare throughr arrow

const chai = () => {
    let username = "haniya"
    console.log(this);
}

chai()


// syntax of arrow function      () => {}

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(5, 8));

// or 

const addthree = (num1, num2) =>  num1 + num2

console.log(addTwo(5, 8))
