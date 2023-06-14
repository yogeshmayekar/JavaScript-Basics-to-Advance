// String indexing 
let myName = "yogesh";

// y o g e s h 
// 0 1 2 3 4 5    zero base indexing

// to print g 
console.log(myName[2]);

// to print y 
console.log(myName[0]);

// to know thw length of the string
console.log("length of the string :" , myName.length);

// to know the last index of the String

console.log("Last index of the string :" , myName.length-1); 

// template string 
let myName1 = "Yogesh M Mayekar";
let myAge = 24;
let aboutMe = `My name is ${myName1} and my age is ${myAge}.`;
console.log(aboutMe);