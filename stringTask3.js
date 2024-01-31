// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u::::
// ans:

let myText =
  "Quiet eagles soar high over unique oases, inviting and evoking profound understanding.";
 
let myStore = 0;
for (let index = 0; index < myText.length; index++) {
    let convert =myText[index].toLowerCase()
  if (
    convert === "a" ||
    convert === "e" ||
    convert === "i" ||
    convert === "o" ||
    convert === "u"
  ) {
    
    
    myStore++;
    console.log(convert);
  }
 
}
console.log("total vowels",myStore);

