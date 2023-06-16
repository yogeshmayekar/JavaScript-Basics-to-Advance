// Objects 
const personDetails = {
    name : "Yogesh",
    age : 24,
    place : "Karwar",
    Education : "B.E",
    Skills : ["Html", 'Css', "JavaScript"],
};
console.log(personDetails);
console.log(personDetails.name);
console.log(personDetails.Skills);
console.log(personDetails.Skills[2]);

// to add the new key value pair 
personDetails.gernder = "Male";
personDetails["height"] = 5.5;
console.log("updated value<:",personDetails);

//bracket notation
console.log(personDetails["age"]);
console.log(personDetails["Skills"]);