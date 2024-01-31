// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their types

// Input:

// let myObject = {

// name: 'John Doe',
// age: 25,
// city: 'Example City',
// isStudent: true
// };
// ans:
let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

for (let property in myObject) {
    let value = myObject[property];
    // console.log(value);
    let type = typeof value;
    // console.log(type);
    console.log(`${value} : ${type}`);
    
}
console.log(typeof myObject.name);
console.log(typeof myObject.age);
console.log(typeof myObject.city);
console.log(typeof myObject.isStudent);