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



