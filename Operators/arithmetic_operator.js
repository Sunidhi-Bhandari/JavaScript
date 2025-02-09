//Arithmetic Operators
// 1. Addition
// 2. Substraction
// 3. Multiplication
// 4. Division
// 5. modolous
// 6. Increment
// 7. decrement
// 8. Exponentation

let a = 10;
let b = 20;

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);

console.log("a % b = ", a % b); // gives the remainder value
console.log("a ** b = ", a ** b); // gives to the power value 10^20

console.log("a++ = ", a++); //first print then add
console.log("a", a);

console.log("a-- = ", a--); //first print then sub
console.log("a", a);

console.log("++a", ++a); //first add then print
console.log("a", a);

console.log("--a", --a); //first sub then print
console.log("a", a);

console.log("++a", ++a); // ++10 --> 11(p)
console.log("a++", a++); //11++(p) --> 12
console.log("--a", --a); // --12 --> 11(p)
console.log("a--", a--); // 11--(p) --> 10
console.log("a", a); // 10(p)
console.log("a--", a--); // 10--(p) -->9
//here p means the value which will be printed