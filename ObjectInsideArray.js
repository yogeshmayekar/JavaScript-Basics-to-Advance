// object inside array 
const objects = [
    {id:1, name:"Yogesh", age:24, village:"Karwar"},
    {id:2, name:"shweta", age:28, village:"Goa"},
    {id:3, name:"pooja", age:24, village:"mudgeri"},
    {id:4, name:"sachin", age:23, village:"angadi"},
    {id:5, name:"Yogita", age:22, village:"mumbai"},
    {id:6, name:"gautam", age:21, village:"dombivli"},
];

console.log(objects);

for(let object of objects){
    console.log(object.id);
    console.log(object.name);
}