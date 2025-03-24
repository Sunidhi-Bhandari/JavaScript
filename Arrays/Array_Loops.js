let num = [10, 20, 30, 40, 50];

for (let i = 0; i < num.length; i++) {
  console.log("Numbers are ", num[i]);
}

// forEach loop

num.forEach((element) => {
  console.log("Square of numbers are ", element * element);
});

// Array.from --> converts any object into array of object (mainly used for convert HTML collection of object into an array)

let value = "abcdefgh";
let resultValue = Array.from(value);
console.log("resultValue", resultValue);

// for...in

for (let n in num) {
  console.log("for...in key", n); //--> prints the key value of an array
  console.log("for...in values ", num[n]); // --> prints an array
}

// for...of

for (let i of num) {
  console.log("for...of values", i);
}

// Array mao method

let a = num.map((value, index, array) => {
  console.log(value, index, array);
  return value + index + array;
});

console.log(a);

// Array filter method

let newArrayFilter = [
  1, 5, 3, 1, 8, 1, 52, 2, 0, 15, 76, 9, 1, 0, 59, 21, 75, 1, 5, 9, 1,
];

let newArrayFilter1 = newArrayFilter.filter((value) => {
  return value > 50;
});
console.log("Array after filter", newArrayFilter1);

// Array reduce method

let newArrayReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newArrayReduce1 = newArrayReduce.reduce((value1, value2) => {
  return value1 + value2;
});

console.log("Reduce Method", newArrayReduce1);
