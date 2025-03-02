// difference between global scope function scope and block scope
var x = 5; // this is declared here and can be accessed inside any code block and function

const fun = (y) => {
  return x * y; // x can be accessed here
};

console.log(fun(5));
