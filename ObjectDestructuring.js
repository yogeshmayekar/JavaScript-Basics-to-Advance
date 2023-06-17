// Object Destructuring 
const cart = {
    item : 1,
    category : "Mobile",
    price : 5000,
}
// let names1 = cart.category;
// let names2 = cart.price;
// console.log(names1, names2);

const {names1, names2, names3} = cart;
console.log(names1);
console.log(names2);
console.log(names3);