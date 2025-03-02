// difference between var, let and const

// var has global scope, variable declared with var can be acesses anywhere in the code
// let and const has block scope, the only difference is that const cannot be reassigned while let can be reassigned
// let and const cannot be redeclared and cannot be used before declaration(hoisting)

variable = 10;
var variable;

console.log(variable);

{
  console.log(variable); // this will also print
  var variable2 = 20;
}
var variable = 30; //can be redeclared
console.log(variable2); // this will also print
console.log(variable);
//  ------------------------------------------
// number = 20; cannot be assigned before declaration
const number = 50; //have to initialize right away
// const number = 40; // this is not allowed, redeclaration is not allowed
{
  const number = 20; // has block scope so this is allowed
  console.log(number); // output of this is 20
}

console.log(number); // output for this is 50

//  ---------------------------------------------

let newNumber;
newNumber = 20; //this is allowed

{
  let newNumber = 30;
  console.log(newNumber); // output will be 30 because of block scope
}

console.log(newNumber); // answer will be 20 because this one is outside block scope

newNumber = 50; // reassigning value is allowed

console.log(newNumber); // this output will be 50

// ----------------------------------------------

const arr = [1, 2, 3, 4]; // this doesnt mean that values inside the array cannot change but it simply means that arr cannot reference another arr, same goes for objects
