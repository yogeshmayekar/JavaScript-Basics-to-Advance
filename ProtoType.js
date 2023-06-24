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
