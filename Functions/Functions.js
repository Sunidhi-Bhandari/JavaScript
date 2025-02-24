//write a function to add 3 numbers

let a = 10;
let b = 20;
let c = 30;

//function with parameters
//normal function

function add(x, y) {
  console.log("Addition Function");
  return x + y;
}

console.log("Addition of a and b are ", add(a, b));
console.log("Addition of b and c are ", add(b, c));
console.log("Addition of c and a  are ", add(c, a));

//arrow function

const sum = (p, q) => {
  console.log("Sum Function");
  return p + q;
};

console.log("Sum of a and b are ", sum(a, b));
console.log("Sum of b and c are ", sum(b, c));
console.log("Sum of c and a  are ", sum(c, a));

//function without parameters
//normal function

function hello() {
  console.log("Hello");
}

hello();

//arrow function

const hey = () => {
  console.log("Hey");
};

hey();
