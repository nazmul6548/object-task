// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

let mytext =  "xyz XYX XyZ ZxY YYY XXXX xxxx YYyy ghxX"
let condition1 = mytext.replaceAll("x" , "y");
let condition2 = condition1.replaceAll("X" , "Y");
console.log(condition2);


