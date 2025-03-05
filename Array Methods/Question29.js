// the main difference between .find and .filter is that
// .find returns the first element that matches the condition
// .filter returns all elements that matches the condition

const arr = [1, 2, 3, 4, 5, 6];

const find = arr.find((num) => num > 4);
const filter = arr.filter((num) => num > 4);

console.log(`filter: ${filter} , find: ${find}`);
