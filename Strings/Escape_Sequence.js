// Escape Sequence chanracters are like if we want to add a ''' quotes in quotes then we can do it using Escape Sequence Characters

// let name = 'Angleo D' Green' --> JS will get confuse between the '''

let name = "Angleo D' Green"; // \' to get the ' in the sentence
console.log(name);

let name1 = "Robert mark\n"; // \n to print on new line
let age = 52;

console.log(name1, age);

let sentence = "Hello \r how are you, I am fine"; // \r to carriage return (removes cursor back to the start)
console.log(sentence);

let str = "Hello\t World"; // \t adds a tab space
console.log(str);
