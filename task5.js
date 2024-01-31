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
    console.log(value);
    let type = typeof value;
    // console.log(type);
    // console.log(`keys : ${property} | type : ${type}`);
    
}
// console.log(typeof myObject.name);
// console.log(typeof myObject.age);
// console.log(typeof myObject.city);
// console.log(typeof myObject.isStudent);
// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean