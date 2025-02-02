// there are 3 types of varibales
// var let const

var a = 10; // var can be updated and can be re-declared (GLOBAL SCOPE VARIBABLE)
var a = 20;
console.log("value of a", a);

let b = 10; // let can be updated but cannot re-declared (BLOCKED SCOPE VARIBALE)
console.log("value of b", b);

b = 30; // will not throw error (updated)
// let b = 30 // will throw error (re-declared)

const c = 40; // const cannot be updated and cannot be re-declared (BLOCKED SCOPE VARIABLE)
console.log("value of c", c);

// c=50 // will throw error
