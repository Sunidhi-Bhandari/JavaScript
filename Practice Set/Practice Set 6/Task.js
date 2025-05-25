// Write a program using prompt function to take input as age as a value from the user and use alert to tell him if he can drive
// In Q1 use confirm to aak user if he wants to see the prompt again
// In Q1 add a console.error if the user enters a negative age

let again = true;

while (again) {
  let age = prompt("Enter Your Age");
  age = Number.parseInt(age);

  if (age < 0) {
    console.error("You have entered wrong age!");
    break;
  }

  if (age >= 18) {
    alert("You Can Drive");
  } else {
    alert("You Cannot Drive");
  }
  again = confirm("Do you want to enter again?");
}

let number = prompt("Enter a number");
number = Number.parseInt(number);

if (number > 4) {
  location.href = "https://google.com";
}

let color = prompt("Enter the background color");
document.body.style.background = color;
