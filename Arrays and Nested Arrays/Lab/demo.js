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

// Index negative number

console.log('Index with negative number case:');
console.log(myArrEl.length);
// myArrEl = [10, 20, 30]
myArrEl[-1] = 5;

console.log(myArrEl[-1]);

// the length hasn't been changed even when we have added element on negative index
console.log(myArrEl.length);
// myArrEl = [10, 20, 30,"-1": 5]

//  we can add on element on negative index, but it leeds to mistake, it will be added as a method of the array
//  it will look like "-1": 5, not be part of the element
// myArrEl = [10, 20, 30,"-1": 5 ], it wont be visible if we loop it

console.log('Array loops:');

let myArrLoop = [10, 20, 30, 40, 50]

// Accessing index of every element in the loop
for (let i = 0; i < myArrLoop.length; i++){
    console.log(i, myArrLoop[i]);
}

// No access to index, only to elements from the loop
for (let element of myArrLoop){
    console.log(element);
}
