// Task-2:
// Count how many times a string has the letter a or A
// ans:
let myName =
  "A quiet afternoon in April, adorned with azure skies, aspen trees swaying gently in the breeze. Amidst the bustling city, Anna found solace by the tranquil riverbank, where she often sought answers to life's enigmatic questions.";
let myRes = 0;
let newStr = myName.toLowerCase();
// console.log(newStr);
for (let i = 0; i < newStr.length; i++) {
  if (newStr[i] === "a") {
    myRes++;
    // console.log(myRes);
  }
}
console.log(myRes);
