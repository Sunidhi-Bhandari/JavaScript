let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log("Original Array :", numbers, "\nType of Array is ", typeof numbers);

let a = numbers.toString(); // --> converts an array into a string
console.log(a, "Type of a is ", typeof a);

let b = numbers.join("-"); // --> joins the array with the ('presesnt here')
console.log("Join Method ", b);

let c = numbers.pop(); // --> Removes the last element of array and return a new array (update the array)
console.log("Popped Element ", c);
console.log("Array after the Popped Method ", numbers); // --> Updated array

let d = numbers.push(200); // --> Add the element in the last of the array
console.log("Pushed Element ", d); // --> Returns the new array length
console.log("Array after the Pushed Method", numbers);

let e = numbers.shift(); // --> Removes the first element of an array
console.log("Shift Element ", e);
console.log("Array after the Shift Method", numbers); // --> Modifies the original array

let f = numbers.unshift(0); // --> Add the element at the begining of the array
console.log("Unshift Element", f); // --> Returns the new array length
console.log("Array after the Unshift Method", numbers);

console.log("Before Delete Operator length on an array", numbers.length);
delete numbers[4]; // --> Delete is an operator, it will delete the element of an array but does not effect the array length
console.log("After Delete Operator length of an array", numbers.length);
console.log("Array", numbers);

let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let concat_array = numbers.concat(newArray); // --> Returns new array, does not change existing array
console.log("Concat Array", concat_array);

let sort_array = [
  651, 65, 98, 65, 98, 6, 9, 6, 81, 98, 98, 61, 9, 61, 98, 6598, 651, 98, 198,
  0, 2985, 84623, 3784, 765, 5986,
];
sort_array.sort(); // --> Sorts the array alphabetically i.e. if numbers then 1,2,3,4,5,6,7,8,9.... and returns new array
console.log("Sorted Array", sort_array);

// When you want to sort the array in ascending or descinding order we can compare it will sort it accordingly
let compare = (a, b) => {
  return a - b; // sorts ascending
};

sort_array.sort(compare);
console.log("Sorted Array after Compare Function", sort_array);

console.log("Before Reverse", numbers);
let g = numbers.reverse(); // --> Returns new array
console.log("After Reverse", numbers);

//Splice Method

// numbers.splice(position to add, number of elements to remove, elements to add)

let h = numbers.splice(4, 3, 80, 600, 700, 800, 900); // --> Returns the deleted values
console.log("After Splice ", numbers);
console.log("Deleted Values", h);

//Slice Method

let i = numbers.slice(8); // --> from index value to end slice the array
let j = numbers.slice(8, 10); // --> from index value to end-1 index slice the array
console.log("Sliced Values", i); // --> Does not modify the original array
console.log("Sliced Values", j); // --> Returns the deleted value
