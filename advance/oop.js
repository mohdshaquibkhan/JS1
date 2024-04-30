const user = {
    username: "haniya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log("got user details from database");
    }

}

console.log(user.username);
console.log(user.getUserDetails());


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = this.isLoggedIn

    return this
}

const userOne = User("irfan", 12, true)

console.log(userOne);