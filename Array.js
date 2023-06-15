// ordered collection of items 
let fruits = ["mango", "banana", "apple", "Kiwi", "grapes"]; //to store multiple items
console.log(fruits);
let numbers =[2,4,6,8,10];
console.log(numbers);
let arr = ["man", 43, false, "world", 4.4, undefined];
console.log(arr);

//array zero base indexing

// to access any element from the array with help of index 
console.log("value of the third index from arr", arr[4]);

//to change the value of array element with help of index
fruits[2] = "Orange";
console.log("Updated Fruits", fruits);

// to know thw type 
console.log(typeof numbers); //object

console.log(Array.isArray(numbers)); //true

// to know the length of the array
console.log("length of the array is", fruits.length);

//to know the last index of the array
console.log("last index of the array is:", fruits.length-1);

//push and pop method
// push is used to add new element to the array at last index 
fruits.push("pineapple");
console.log(fruits);
// pop is used to remove the last element from the array it also returns the removed value
let removedValue = fruits.pop();
console.log(fruits);
console.log(removedValue); //returned value

//shift and unshift
//unshift adds new element to the array at the begining index
fruits.unshift("DragonFruit");
console.log(fruits);

//shift removes the element from the array at the begining index
let removedValue2 = fruits.shift(); // it also returns value
console.log(fruits);
console.log(removedValue2);


