// typeof operator 
let age = 24;
let names = "yogesh";
let coder = true;

// to know the data type of the variable 
console.log("type of age is:", typeof age);
console.log("type of names is:", typeof names);
console.log("type of coder is:", typeof coder);

// convert number to string 
// let newAge = age + "";
// console.log(newAge);
// console.log("type of new age is:", typeof newAge);

let newAge = String(age);
console.log(newAge);
console.log("type of new age is:", typeof newAge);

// convert string to number 
let myString1 = "24";
console.log("type of my string1 is:", typeof myString1);
// let myString2 = +"24";
// console.log("type of my string2 is:", typeof myString2)
let myString2 = Number(myString1)
console.log("type of my string2 is:", typeof myString2)


//null
let outLine = null;
console.log(typeof outLine, outLine);
