// syntax of for loop

// for (statement 1; statement 2; statement 3) {
//     code to be executed
// }

// statement 1 to be executed 1 time
// statement 2 is condition based on which the loop runs
// statement 3 is executed everytime the loop body is executed

// write a sample program to find the factorial of a number

let number = 5;
let fact = 1;

for (let i = number; i >= 1; i--) {
  fact *= i;
}

console.log("Factorial of the", number, "is", fact);
