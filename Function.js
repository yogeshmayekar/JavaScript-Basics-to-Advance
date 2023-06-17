// functions in js 
function helloWorld(){
    console.log("Hello World");
}

helloWorld();  //calling function

function twoNumberSum(num1, num2){
    return num1+num2;
}

let num1 = 5;
let num2 = 6;

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
