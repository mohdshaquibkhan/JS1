// STRING

const name = "shaquib"
const repoCount = 45

//console.log(name + repoCount);
// ` backtick

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('shaquib')         //string declare

console.log(gameName[5]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));


const newString = gameName.substring(0,3)
const newString1 = gameName.substring(4,7)
console.log(newString);
console.log(newString1);

const anotherString = gameName.slice(-2,7)
console.log(anotherString);

const newStringOne = "        mohdshaquibkhan"
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shaquib.com/shaquib%20khan"

console.log(url.replace('%20' , '-'));
console.log(url.includes('shaquib'));
console.log(url.includes('gaus'));