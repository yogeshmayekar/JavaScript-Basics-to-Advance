// clone array 
// first method 
let array1 = ["rahul", 24, "Indian"];
let array2 = ["rahul", 24, "Indian"];
console.log(array1===array2);

//slice method
let names1 = ["yogesh", "nehal", "jasmin", "rajat"];
let names2 = names1.slice(0);
console.log(names1===names2);

// clone through array concatination 
let names3 = [].concat(names1);
console.log(names1===names3);

// spread operator 
let names4 = [...names1];
console.log(names1===names4);