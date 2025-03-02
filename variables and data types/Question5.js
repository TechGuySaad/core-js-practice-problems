//  by using typeof operation we can check if variable null or defined

let name;
let age = null;

// console.log(typeof name, typeof age); //this only catches undefined

if (age == null) {
  console.log("age is null or undefined");
}

if (name == null) {
  console.log("name is null or undefined"); // although name is undefined but this also catches undefined
}
