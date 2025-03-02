const odd_even = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(`8 is ${odd_even(8) ? "even" : "odd"}`);
console.log(`9 is ${odd_even(9) ? "even" : "odd"}`);
