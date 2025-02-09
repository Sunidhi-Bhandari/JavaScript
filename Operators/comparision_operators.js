// Comparision Opeartors
// 1. == --> equal to
// 2. != --> not equal to
// 3. === --> equal to value and type
// 4. !== --> not equal to value and not equal to type
// 5. > --> greater than
// 6. < --> less than
// 7. >= --> greater than equal to
// 8. <= --> less than equal to

let a = 10;
let b = 10;
let c = 20;
let d = "20";

console.log("a == b", a == b); //true
console.log("a != b", a != b); //false

console.log("c == d", c == d); //true
console.log("c === d", c === d); //false
console.log("c !== d", c !== d); //true

console.log("a > b", a > b); //false
console.log("a < b", a < b); //false

console.log("a >= b", a >= b); //true
console.log("a <= b", a <= b); //true
