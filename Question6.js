// difference between == and ===

// == only compares but is not type strict
// === this compares types and values
//  == will convert type of variable temporarily for comparison
// === is strict, so it wont do any type conversion before comparison and if types of two variables do not match it will simply return false

let a = 10; // Number
let b = "10"; // String

if (a == b) {
  console.log(
    "a will convert to string a == b will return true so this statement will run "
  );
}

if (a === b) {
  console.log(
    " a and b do not have same type so this statement wont run and else will run"
  );
} else {
  console.log("a and b are not of the same type");
}
