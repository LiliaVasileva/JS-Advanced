// empty array
const myArr = [];
// Exp Arr
const myArrEl = [10, 20, 30];

console.log(myArrEl[0]);

// Array has length method
console.log(myArrEl.length);

// Last element index is the length -1
console.log(myArrEl.length - 1);

// Accessing indexes that do not exist in the array returns undefined
console.log(myArrEl[10]);

myArrEl[10] = 101;

console.log(myArrEl[10]);
console.log(myArrEl);