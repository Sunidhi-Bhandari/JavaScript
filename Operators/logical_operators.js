// Logical Operators
// 1. && --> AND Operator ------ Checks both conditions are true then return true else false
// 2. || --> OR Operator ------- checks one of the condition is true then return true else false
// 3. ! --> NOT Operator ------- if false then true, if true then false

let a = 10;
let b = 20;
let c = 30;

console.log("a is greater than b and b is greater than c", a > b && b > c);
console.log("a is less than b and b is less than c", a < b && b < c);

console.log("a is greater than c or c is greater than a", a > c || c > a);
console.log("b is greater than c or c is greater than b", b > c || c > b);
console.log("a is greater than b or a is greater than c", a > b || a > c);

console.log(!true)
console.log(!false)