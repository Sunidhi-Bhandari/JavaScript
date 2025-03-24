let array = [10, 20, 30, 40, 50, null, "String", true];

console.log("Array :", array); // --> Prints the array

// Indexing starts from 0
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]); // --> Prints undefined as no element present at index 8

console.log("Length of the Array :", array.length); // --> Prints the length on an array

array[8] = "New Value"; // --> Adding new value in the array

array[1] = 100; // --> replacing an element in the array

console.log("Array :", array); // --> Prints the array

console.log("Length of the Array :", array.length); // --> Prints the length on an array

// print an array using for loop

let numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
