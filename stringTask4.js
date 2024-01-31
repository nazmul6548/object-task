// Task-5:
// Capitalize Every first Letter of each word in a String

let myTexts = "amar desh bangladesh ami amar desh k valobashi.The diligent student diligently pursued knowledge, striving to expand their understanding of the world.";
let splitKorbo = myTexts.split(" ");
// console.log(splitKorbo);
let myStoreRoom = [];

for (let i = 0; i < splitKorbo.length; i++) {
  let myVariable = splitKorbo[i];
  let capitalizedWord =
    myVariable.charAt(0).toUpperCase() + myVariable.slice(1);
    //   console.log(capitalizedWord);
    myStoreRoom.push(capitalizedWord)
    // console.log(myStoreRoom);
}
let myResult = myStoreRoom.join(" ");
console.log(myResult);
