// array destructuring
// it is use to create new variable to store array each element

let array = ["item1", "item2", "item3", "item4"];
let i1 = array[0];
let i2 = array[1];
let i3 = array[2];
let i4 = array[3];
console.log(i1);

//ES6 syntax for array destructuting is
let [E1,E2,E3,E4] = array;
console.log(E3);
let [A1, , A3, A4] = array;  //to skip second element
console.log(A1,A3,A4);

// to store multiple element in one variable

let [K1,...K2] = array;
console.log(K2);
