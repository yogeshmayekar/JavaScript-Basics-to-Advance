// class 
class CreateUser{
    constructor(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
about(){
    return `my name is ${this.firstName} and my age is ${this.age}`
};
is18(){
    return this.age >=18;
}
}

const user1 = new CreateUser("yogesh", "mayekar", "yogesh.mayekar09@gmail.com", 24, "Karwar");
const user2 = new CreateUser("swara", "Naik", "swaranaik00@gmail.com", 21, "Goa")
console.log(user1.is18());
console.log(user2);
console.log(user2.about());


// extend and super 
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`
    }
    search(){
        return `${this.name} is searching`
    }
}

class Dog extends Animal{
    constructor (name, age, speed){
        super(name, age);
        this.speed = speed;
    }

    run(){
        return `${this.name} is running at ${this.speed} km/hr`
    }
}

const animal1 = new Animal("Dog", 3);
console.log(animal1)
console.log(animal1.eat())

const dog1 = new Dog("tomy", 1, 23);
console.log(dog1);
console.log(dog1.search())
console.log(dog1.run());