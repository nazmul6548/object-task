// let str = "Mississippi";
// console.log(str.indexOf("i",3));

// const myObject = {
//     a: 1,
//     b: 2,
//     c: 3
//   };

//   for (let prop in myObject) {
//     console.log( `${prop} ${myObject[prop]}`);
//   }

//   const x = ""
// if(!x.length){
// console.log("Hey")
// }else{
// console.log("Hi")
// }
// const str = "Hello";
// str[0] = "h";
// console.log(str);

const numbers = [23, 43, 2, 5, 346, 203, 21];
let sumOdd = 0;
let sumEven = 0;
for (let i = 0; i < numbers.length; i++) {
  const x = numbers[i];
  // console.log(x);
  if (x % 2 === 0) {
    sumEven = sumEven + x;
    // console.log(sumEven);
  } else {
    sumOdd = sumOdd + x;
  }
}
console.log(sumEven);
console.log(sumOdd);
