// const userMethods = {
//     about : function(){
//         return `my name is ${this.firstName} and my age is ${this.age}`
//     },
//     is18 : function(){
//         return this.age >=18;
//     }
// }

function createUser(firstName, lastName, email, age, address){
    // const user = {};
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    // user.about = userMethods.about;
    // user.is18 = userMethods.is18;
    createUser.prototype.about = function(){
        return `my name is ${this.firstName} and my age is ${this.age}`
    };
    createUser.prototype.is18 =  function(){
        return this.age >=18;
    }

    return user;
}

const user1 = createUser("yogesh", "mayekar", "yogesh.mayekar09@gmail.com", 24, "Karwar");
const user2 = createUser("swara", "Naik", "swaranaik00@gmail.com", 21, "Goa")
console.log(user1.is18());
console.log(user2);
console.log(user2.about());


// new keyword 
// 1. new keyword create empty object 
// 2.new keyword returns created objects 
// 3. it works as a prototype automatically 
function createCustomer(firstName, age){
    this.firstName = firstName;
    this.age = age;
}
createCustomer.prototype.about = function(){
    console.log(this.firstName, this.age);
}
const customer1 = new createCustomer("yogesh M", 24);
console.log(customer1);

customer1.about();
