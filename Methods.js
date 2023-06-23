// methods 
// function inside object 

// this keyword   
function clientData(){
    console.log(`Client Name is ${this.clientName} and client age is ${this.age}`)
}

const client1 = {
    clientName : "yogesh mayekar",
    age : 24,
    details: clientData,
}
const client2 = {
    clientName : "Gautam Naik",
    age : 19,
    details: clientData,
}
const client3 = {
    clientName : "Sandesh Naik",
    age : 32,
    details: clientData,
}
const client4 = {
    clientName : "Harish Naik",
    age : 33,
    details: clientData,
}

client3.details();
client1.details();

// call apply and bind 

function about(industry, exp){
    console.log(`my name is ${this.firstName} and my age is ${this.age}`, industry, exp)
}

// call 
const user1 = {
    firstName: "Sanchana",
    age : 24,
}

const user2 = {
    firstName: "yogita",
    age:23,
}

// user1.about.call(user2)
// user1.about.call()
about.call(user1,"finance", "10/10")  //to pass the argument

// apply 
about.apply(user1, ["civil","10/10"])

//blind 
// this method returns function 
const reFunction = about.bind(user2, "fintech", "9/10");
reFunction();