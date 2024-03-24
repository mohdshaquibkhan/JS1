console.log(2 > 1);
console.log(2 > 10);
console.log(1 == 1);
console.log(1 != 1);

console.log(5)



//*********************************************************************************************************

// HEAP AND STACK MEMORY ALLOACATION

// stack are used in Primitive data type ; heap are used in non-primirtive data type
//jb bhi stack memory used hoti hy iska mtlb ye hy ki jo hm variable declare kiye hy uska copy milta hy 
//jb bhi ake meomry heap ke under deffine hoti hy ya object wha se hme refernce milta hy (original value)//

// primitive data typs like number bolean 


// example of stack memory

let myInstaId = "mohdshaquibkhan"

let anothername = myInstaId
anothername = "shaquukhan"

console.log(myInstaId);
console.log(anothername);



//example of heap 


let userOne = {
    email: "mohdshaquib98@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne 

userTwo.email = "user23@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
