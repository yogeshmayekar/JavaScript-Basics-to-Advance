let fruits = ["mango", "Apple", "Mango", "orange", "kiwi"];

// for loop 
for(let i=0; i<=fruits.length-1; i++){
    console.log(fruits[i]);
}

// whilw loop
let i = 0;
while(i < fruits.length){
    console.log(fruits[i]);
    i++;
}

//for of loop
for(let fruit of fruits){
    console.log(fruit);
}

// for in loop 
for(let i in fruits){
    console.log(i);
    console.log(fruits[i]);
}