const promiseOne =new Promise(function(reslove, reject) {
    // do an async task
    // DB calls, cryptography network
    setTimeout(function() {
        console.log('Async task is completed');
        reslove()
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(reslove, reject){
    setTimeout(function(){
        console.log("async task 2");
        reslove()
    }, 1000)

}).then(function(){
    console.log("async 2 resloved");
})


const promiseThree = new Promise(function(reslove, reject){
    setTimeout(function(){
       reslove({username: "chai", email: "chai@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(reslove, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            reslove({username: "haniya", password: "1234"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
   .then((user) => {
      console.log(user);
        return user.username
})
   .then((username) => {
      console.log(username);
})
   .catch(function(error){
      console.log(error);
})
.finally(() => console.log("The promise is either resloved or rejected"))



const promiseFive = new Promise(function(reslove, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            reslove({username: "javascript", password: "1234"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})
 

async function consumePromiseFive() {
    try {
        const response = await promiseFive
    consumePromiseFive.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()



