// use .reduce to sum up elements in an array and explain how it works
// .reduce takes a callback and an initial value
// the callback has the accumulator of the previous result and the current value as arguments returned and
// in the first iteration accumulator will have the initial values
// during each iteration the value returned will be the value of accumulator

const arr = [1, 2, 3, 4, 5, 6];

const sum = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(`the sum of the ${arr} is ${sum}`);
