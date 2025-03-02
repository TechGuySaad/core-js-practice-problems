// How does let behave differently than var in terms of scope
let firstName;
firstName = "Saad"; // Can be accessed anywhere in code as long as it is not declared inside a code block, in that case firstName inside that code block will be executed

{
  var lastName;
  lastName = "Rahman"; // Can be accessed anywhere in the code, even if declared inside a code block it can be accessed outside that block
}

{
  let firstName;
  firstName = "Not Saad";
}

console.log(lastName);
console.log(firstName); // this will log Saad but not 'Not Saad'
