// 1. create a variable of type string and try to add a number to it

let a = "ABCD";
let b = 456;
console.log("String and Number", a + b);

// 2. use a typeof() operator to find the type of sting used in last question

console.log("Type of a is", typeof (a + b));

// 3. create a const object in JS. Can you change it to hold a number later

const obj = {
  name: "abc",
  age: 10,
  gender: "F",
};

obj["number"] = 13348946; //can add a new key to object
obj["name"] = "xyz"; // can update an object

// obj = 'sodn' // cannot assigned as it is a constant variable

console.log(obj);

// let obj = 20; cannot change it as it is declared as const first

// 4. try to add a new to key to the const object in the problem 3 were you able to add it

// 5. write a js program to create a word meaning dictionary of 5 words

const dictionary = {
  adjective:
    "a word naming an attribute of a noun, such as sweet, red, or technical.",
  woodchuck: "a stocky burrowing rodent that hibernates in the winter",
  aforementioned: "denoting a thing or person previously mentioned.",
  definitely: "in a definite manner; clearly.",
  VDU: "short for visual display unit.",
};

console.log(dictionary.adjective)