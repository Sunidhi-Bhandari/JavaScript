// 1. Create an array of numbers snd take the input from the user to add numbers to this array

// let numbers = [1, 2, 35, 5, 4];
// let newArray = prompt("Enter a number to add in the array");
// newArray.push(a);
// console.log(numbers);

// 2. Keep adding numbers to the array until 0 is added in the array

// let numbers = [1, 8, 6, 5, 7, 9, 2, 8];
// let num;
// do {
//   let a = prompt("Enter a number to add in the array");
//   num = numbers.parseInt(a);
// } while (num != 0);

// console.log(num);

// 3. Filter the number divisible by 10 from a given array

let numbers = [1, 5, 3, 9, 8, 4, 1, 3, 6, 20, 4, 990, 460, 8500, 191];
let result = numbers.filter((value) => {
  return value % 10 == 0;
});

console.log("Numbers divisible by 10 are", result);

// 4. create an array of square of given numbers

let num = [1, 5, 9, 7, 3, 4, 0, 6, 5];
let squareNumbers = num.map((value) => {
  return value * value;
});

console.log("Square of numbers are ", squareNumbers);

// 5. Use reduce to calculcate factorial of a given number from an array of first n natural numbers

let n = [1, 2, 3, 4, 5];
let fact = n.reduce((value1, value2) => {
  return value1 * value2;
});

console.log("Factorial of n natural numbers are ", fact);
