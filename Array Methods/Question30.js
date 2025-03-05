// use .some and .every to check if an array contains only positive numbers
// .some returns true if even one element passes the condition in the callback runs on all the elements

// .every checks if every element in the array passes a condition and only then returns true

const arr = [1, -2, -3, 4, 5];

const some = arr.some((item) => item > 0);
const every = arr.every((item) => item > 0);
console.log("arr:", arr);
console.log(".sum result: \n");
some
  ? console.log("atleast one element is positive")
  : console.log("none are positive");

console.log(".every result: \n");
every
  ? console.log("all elements are positive")
  : console.log("all are not positive");
