// spread operator in array
const Array1 = [1,2,3,4,5];
const Array2 = [6,7,8,9,0];

const newArray = [...Array1, ...Array2];
console.log(newArray);

// "Yogesh"  
const newArray2 = [..."Yogesh"];
console.log(newArray2);

// spread operator in objects
const obj1 = {
    key1 : "Value 1",
    key2 :  "Value 2",
}

const obj2 = {
    key3 : "Value 3",
    key4 : "Value 4",
}

const newObj = {...obj1, ...obj2};
console.log(newObj);

//spread operator
const object1 = {
    keyVal1 : "one",
    keyVal2 : "Two",
}

const object2 = {
    keyVal1 : "notOne",
    keyVal3 : "Three",
    keyVal4 : "Four",
}

const finalObject = {...object1, ...object2};
console.log(finalObject);

const finalObject2 = {...object2, ...object1};
console.log(finalObject2);