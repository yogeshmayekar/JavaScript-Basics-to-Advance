// callback function 
function myFunction2(){
    console.log("inside my function 2");
}

function myFunction(cb){
    console.log("my function one");
    cb();
}

myFunction(myFunction2);

// function returning function 
function myFunc(){
    function hello(){
        console.log("hello world");
    }
    return hello;
}

const ans = myFunc();
console.log(ans);
ans();  // function calling