// Conditional Statements
// 1. if
// 2. if-else
// 3. nested if-else

let age = -55;

if (age > 0 && age < 18) {
  console.log("You are kid, cannot drive");
} else if (age >= 18 && age <= 60) {
  console.log("You are adult, can drive");
} else if (age > 60) {
  console.log("You are old");
} else {
  console.log("Imput a valid age");
}
