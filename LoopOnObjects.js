const personDetails = {
    name : "Yogesh",
    age : 24,
    place : "Karwar",
    Education : "B.E",
    Skills : ["Html", "Css", "JavaScript"],
};

// for in loop 
for(let detail in personDetails){
    console.log(detail);
    console.log(personDetails[detail]);  //to acess key through for in loop
}

//Object.keys
let objectKey = Object.keys(personDetails);  //it returns the key of object in array
console.log(objectKey);
console.log(Array.isArray(objectKey));
