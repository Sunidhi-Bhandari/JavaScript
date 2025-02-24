// for...in loop

// iterates over the array indexes (keys)
// used for objects and ennumerable properties

let obj = {
  a: 10,
  b: 20,
  c: 30,
};

for (let i in obj) {
  console.log("Keys in", i, "Object are", obj[i]);
}

// for...of loop

// iterates over the value of an iterable (arrays, strings, maps, sets, etc)
// best for arrays, strings and iterable objects

let arr = [10,20,30,40,50]

for (let n of arr) {
    console.log(n)
}