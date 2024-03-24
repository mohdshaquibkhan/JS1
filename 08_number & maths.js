// number and maths

const score = 349
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 123.8973
console.log(otherNumber.toPrecision(3));

const hundreds =1000000
console.log(hundreds.toLocaleString());


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                           Maths

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(7.6));
console.log(Math.ceil(2.2)); // ceil means that it takes the top value after point
console.log(Math.floor(4.9));  // floor takes the lowest value
console.log(Math.min(4,2,8,9));
console.log(Math.max(5,9,7,3,4));

console.log(Math.random());  // Math.random values always lies between o & 1
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)