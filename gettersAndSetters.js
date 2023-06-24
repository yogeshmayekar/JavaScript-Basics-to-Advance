// getters setters and satic in javaScript 
class person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static classInfo(){
        return "this is person class";
    }

    get fullName(){
        return `${this.firstName}${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new person("yogesh", "naik", 24);
// console.log(person1.fullName());
console.log(person1.fullName);
person1.fullName = "Harish Naik";  //to change the value of the person 1 full name
console.log(person1.fullName);

console.log(person.classInfo())