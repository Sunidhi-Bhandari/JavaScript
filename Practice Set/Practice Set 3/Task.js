// 1. Write a program to print the marks of a student in an object using for loop
// obj = { harry : 98, rohan : 70, akash : 7}

let obj = {
  harry: 98,
  rohan: 70,
  akash: 7,
};

let students = Object.keys(obj);

for (let i = 0; i < students.length; i++) {
  console.log("Marks of", students[i], "are", obj[students[i]]);
}

// 2. Write a program in Q1 using for in loop

for (let i in obj) {
  console.log("Marks of the student", i, "are", obj[i]);
}

// 3. Write a program to print 'try again' until the user enters the correct number
/*
let correctNumber = 20;
let userInput;

do {
  userInput = prompt("Enter a number:");
  userInput = Number(userInput);
  if (userInput !== correctNumber) {
    console.log("Try Again");
  }
} while (userInput !== correctNumber);

console.log("Congratulations! You entered the correct number.");

this code will run in the browser JS
*/

// 4. wrtie a function to find the mean of 5 numbers

let numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

const mean = (numbers) => {
  let average = sum / numbers.length
  return average;
};

console.log("Mean of the numbers are ", mean(numbers))