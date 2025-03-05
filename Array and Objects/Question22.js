// How to add or remove elements from beginning or end of an array

// shift() - removes elements from the start of the array
const arr = [1, 2, 3, 4];

let remNum = arr.shift();
console.log(`removed ${remNum} using shift`);

// pop() - removes elements from the end of the array

remNum = arr.pop();
console.log(`removed ${remNum} using pop`);
