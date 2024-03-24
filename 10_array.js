//  ARRAY

const myArr = [1,2,3,4,5,6,7]           // array declare

const myHero = ["shaktiman", "shiv"]
const myArr1 = new Array(1, 2, 3, 4, 5, 6)

console.log(myArr[0]);
console.log(myHero);
console.log(myArr1);

// Array Methods
 myArr.push(7)
 myArr.pop()

 myArr.unshift(1)
 myArr.unshift(6)

 console.log(myArr.includes(5));
 console.log(myArr); 

 const newArr = myArr.join()
 console.log(newArr);

 // slice, splice

 console.log("A ", myArr);

 const myn1 = myArr.slice(1,3)      // slice manupulates original value of array


 console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

 

 










