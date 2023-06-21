// important array method 
// for each method
const numbers = [4, 2, 5, 8, 9, 1];

numbers.forEach(function(number, index){
    console.log("number is :", number);
    console.log("index is:", index);
});

const users = [
    {firstName:"yogesh", age:23, gender:"male"},
    {firstName:"sandesh", age:32, gender:"male"},
    {firstName:"sachin", age:33, gender:"male"},
    {firstName:"gautam", age:19, gender:"male"},
];

users.forEach(function(user){
    console.log(user);
    console.log(user.firstName);
})

// map method 
const numDatas = [43, 76, 90, 55, 13];

let ans = numDatas.map(function(numData){
    return numData+2;   // it is mendentory to return from the function insted of console to avoid unddefine values
})
console.log(ans);  //map method returns new array

let ans2 = users.map((user)=>{
    return user.firstName;
});

console.log(ans2);

// filter function 
let nums = [2,7,4,13,12,6,21];
let ans3 = nums.filter((num)=>{
    if(num%2===0){
        return num;
    }
});

console.log(ans3);  // this method filters according to condition and returns array 

// reduce method 

const nums2 = [1,2,3,4,5,6,7,8,9,10];

let ans4 = nums2.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
},5)
console.log(ans4);

const userCart = [
    {productId:1, productName:"apple", price:12000},
    {productId:2, productName:"mi", price:14999},
    {productId:3, productName:"samsung", price:17500},
    {productId:4, productName:"oppo", price:10000},
];

let totelBill = userCart.reduce((totelPrice, currentProducts)=>{
    return currentProducts.price + totelPrice;
},0);

console.log(totelBill);

// sort method 
// sort method change the original array so we need to clone the array 
const num5 = [4,7,1200,67,21,11,34,8455];
num5.sort((a,b)=>a-b);  //accending order
console.log(num5);

// price lowToHigh and highToLow
const products = [
    {productId: 1, productName:"p1", price:4000},
    {productId: 2, productName:"p2", price:500},
    {productId: 3, productName:"p3", price:12000},
    {productId: 4, productName:"p4", price:9000},
]

//lowToHigh
products.slice(0).sort((a,b)=>{
    return a.price-b.price
});
console.log("Price Low to High",products);

//highToLow
products.slice(0).sort((a,b)=>{
    return b.price-a.price
});
console.log("Price High to Low",products); 

// find method 
// find method finds first occurence value 
const array = ["orange","man","cat","mango","dog"];
const ans5 = array.find((s)=>{
    return s.length===3;
})
console.log(ans5);

//Every method
// every mrthod returns boolean values 
const num6 = [2,4,6,8,9,10];
const ans6 = num6.every((num)=>{
    return num%2===0;
})
console.log(ans6);  //it will returns the first false value


// some method 
const number = [3,5,8,9];
const ans7 = number.some((num)=>num%2===0);
console.log(ans7);   //if any one value satispy it return true otherwise false 


// fill method 
// value, start, end 
const array8 = new Array(10).fill(-5);
console.log(array8);

const array9 = [1,2,3,4,5,6,7,8,9,10];
array9.fill(-2,3,8);
console.log(array9);

// splice method 
// start, delete, insert 
// splice method change the original array 
const myArray = ['item1','item2','item 3'];
myArray.splice(1,1);  // to delete  it also return the deleted values
console.log(myArray);

myArray.splice(1,0,"item22");
console.log(myArray);  // to insert without delete any item

// insert and deletion at once 
myArray.splice(1,2,"item42", "item43","item44");
console.log(myArray);


