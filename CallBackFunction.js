// callback function 
function myFunction2(){
    console.log("inside my function 2");
}

function myFunction(cb){
    console.log("my function one");
    cb();
}

myFunction(myFunction2);