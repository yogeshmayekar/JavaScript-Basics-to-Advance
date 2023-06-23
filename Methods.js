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