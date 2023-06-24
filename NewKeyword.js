// new keyword usecase 
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}

CreateUser.prototype.about = function(){
    return `my name is ${this.firstName} and my age is ${this.age}`
};
CreateUser.prototype.is18 =  function(){
    return this.age >=18;
}

const user1 = new CreateUser("yogesh", "mayekar", "yogesh.mayekar09@gmail.com", 24, "Karwar");
const user2 = new CreateUser("swara", "Naik", "swaranaik00@gmail.com", 21, "Goa")
console.log(user1.is18());
console.log(user2);
console.log(user2.about());
