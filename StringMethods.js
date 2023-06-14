// trim()
let myName ="    yogesh     ";
console.log(myName.length); //to know the length

// to remove the spaces we uses trim()
myName.trim();
console.log(myName.length); //it wont change the lenght because strings are immutable

// trim method returns a new string
let newName = myName.trim();
console.log("length of the string after removing spaces:" , newName.length);

// toUpperCase()
let upperName = newName.toUpperCase();  //it also return new string beacase strings are immutable
console.log("upper case of the new name is :", upperName);

//toLowerCase()
let lowerName = upperName.toLowerCase();
console.log("lowercase of the new name is:" , lowerName); //it also return new string beacase strings are immutable

// slice()
let message = "Work smarter not harder";
// to slice the word smarter 
let newWord = message.slice(5,12); //it will take (starting index,ending index)
console.log("new word is :" , newWord);