// 1. use logical operator to find whether the age of a person lies between 10 and 20

let age = 52;

if (age >= 10 && age <= 20) {
  console.log("Age of person is between 10-20");
} else {
  console.log("Age of a person is not between 10-20");
}

// 2. Demonstrate the use of switch case in JS

let num = 1;

switch (num) {
  case 1:
    console.log("Number is 1");
    break;
  case 2:
    console.log("Number is 2");
    break;
  case 3:
    console.log("Number is 3");
    break;
  case 4:
    console.log("Number is 4");
    break;
  case 5:
    console.log("Number is 5");
    break;
  default:
    console.log("Please enter number between 1-5");
}

// 3. write a JS program to find a number is divisible by either 2 or 3

let number = 1;

if (number % 2 === 0 || number % 3 === 0) {
  console.log("Divisible by 2 OR Divisible by 3");
} else {
  console.log("Not divisible by 2 OR 3");
}

// 4. write a JS program to find a number is divisible by 2 and 3

let number2 = 10;

if (number2 % 2 === 0 && number2 % 3 === 0) {
  console.log("Divisible by 2 AND Divisible by 3");
} else {
  console.log("Not divisible by 2 AND 3");
}

// 5. print 'You can Drive' or 'You cannot Drive' based on age being greater than 18 using ternary operator

let age1 = 45

console.log(age1 >=18 ? 'You Can Drive' : 'You Cannot Drive')