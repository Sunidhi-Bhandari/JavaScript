/*
Write a JS program to guess a random number and store it in a variable. The program then takes an input from the user to tell them whether the guess was correct, greater than or lesser than the original number. 100 (number of guesses) is the score of the user. The program is expected to terminate once the number is guessed. Number should be between 1-100 
*/

let randomNumber = Math.floor(Math.random() * 100) + 1;
let n;
let score = 100;

do {
  n = parseInt(prompt("Enter a number between 1 to 100 - "));

  if (!Number.isInteger(n) || n < 1 || n > 100) {
    console.log("Please enter a valid number between 1 and 100.");
    continue;
  }

  if (n === randomNumber) {
    console.log("Congratulations! Your guess is correct.");
    break;
  } else if (n > randomNumber) {
    console.log(
      "Your input number is greater than the actual number. Please try again."
    );
  } else if (n < randomNumber) {
    console.log(
      "Your input number is lesser than the actual number. Please try again."
    );
  }

  score--;
} while (randomNumber !== n);

console.log("Your score is:", score);
