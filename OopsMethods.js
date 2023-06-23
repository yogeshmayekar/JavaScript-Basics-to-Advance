const userMethods = {
    about : function(){
        return `my name is ${this.firstName} and my age is ${this.age}`
    },
    is18 : function(){
        return this.age >=18;
    }
}

function createUser(firstName, lastName, email, age, address){
    // const user = {};
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    // user.about = userMethods.about;
    // user.is18 = userMethods.is18;

    return user;
}

const user1 = createUser("yogesh", "mayekar", "yogesh.mayekar09@gmail.com", 24, "Karwar");
const user2 = createUser("swara", "Naik", "swaranaik00@gmail.com", 21, "Goa")
console.log(user1.is18());
console.log(user2);
console.log(user2.about());


//__proto__ in javaScript
const obj1 = {
    key1 : "value2",
    key2 : "value2"
}

// we can also create empty object by bellow method 
const obj2 = Object.create(obj1);  //obj1 to create proto 
console.log("empty object", obj2);

obj2.key3 = "value3";
console.log(obj2, obj2.key3);

console.log(obj2.key1);  // this behavier is possible because of __proto__