// Task-5:
// Capitalize Every first Letter of each word in a String
let myText = "amar desh bangladesh ami amar desh k valobasi"
let splits = myText.split(" ");
let store = [];

for (let i = 0; i < splits.length; i++) {
    let words = splits[i];
    let store = words.charAt(0).toUpperCase() + words.slice(1);
    // splits.push(store);
    console.log(store);
    
    
}
let result = store.join(" ");
console.log(result);

