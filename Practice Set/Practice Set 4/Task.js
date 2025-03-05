// 1. What will be the following print in JS ?
// console.log('har\''.length)

console.log('har\''.length) // Prints 4

// 2. Explore the includes, startsWith and endWiths functions of the String

/*
includes() --> Checks if a substring exists anywhere in the string	 
Returns --> true or false
*/

let inc = 'Delhi is the capital of India'

console.log(inc.includes('Delhi')) // --> Checks str is present or not (returns true)
console.log(inc.includes('Is')) // --> Case sensitive (returns false)
console.log(inc.includes('India', 30)) // Starts checking if the strings is present from that index (returns false)
console.log(inc.includes('India', 10)) // Starts checking if the strings is present from that index (returns true)

/*
startsWith() --> Check if a string starts with a substring
*/

let strWith = 'Hello world'

console.log(strWith.startsWith("Hello")); // true
console.log(strWith.startsWith("world")); // false
console.log(strWith.startsWith("H")); // true
console.log(strWith.startsWith("world", 7)); // true (checks from index 7)

/*
endWith() --> check if a string ends with a substring
*/

let endWith = "document.pdf";

console.log(endWith.endsWith(".pdf")); // true
console.log(endWith.endsWith("doc")); // false
console.log(endWith.endsWith("document")); // false
console.log(endWith.endsWith("document", 8)); // true (checks first 8 characters)

// 3. Write a program to convert a given string to lowercase

let str = 'StrinG'

console.log(str.toLocaleLowerCase())

// 4. Extract the amount out of this string 
// ' Please give Rs. 1000'

let sentence = 'Please give Rs. 1000'
let extractAMount = sentence.split('Rs.')[1].trim() 

console.log('Extracted Amount is : ',extractAMount)


// 5. Try to change Character of a given string 

let word = 'Doggy'
console.log(word.replace('D','F'))