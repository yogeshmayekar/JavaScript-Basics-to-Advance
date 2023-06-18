// functions in js 
function helloWorld(){
    console.log("Hello World");
}

helloWorld();  //calling function

function twoNumberSum(num1, num2){
    return num1+num2;
}

let num1 = 14;
let num2 = 9;

console.log(twoNumberSum(num1,num2));  //calling function

// function to find odd or even 

let number = 16;

function oddEven(number){
    if(number % 2 === 0){
        return "even";
    }else{
        return "odd";
    }
}

console.log(oddEven(number));

// function to find the key in array 
function findKey(array, key){
    for(let i = 0; i < array.length; i++){
        if(array[i]===key){
            return i;
        }
    }
    return -1;
}

let array = [2,4,6,8,9,3,13,64,8,44,98];
let key = 13;
let result = findKey(array, key);
console.log("Given number find at index:",result);


// function expression in js 
let substraction = function(num1,num2){
    let ans = num1-num2;
    return ans;
}
console.log(substraction(num1, num2));

// arrow function 
let namaste=()=>{
    let message = "say Namaste world";
    return message;
}
console.log(namaste());

// or 
let namaste2=()=> "Namaste World 2";
console.log(namaste2());