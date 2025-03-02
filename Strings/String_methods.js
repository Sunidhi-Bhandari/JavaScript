let str1 = 'Hello, how are you ?'
let str2 = '              I am good, what about you              '

console.log(str1.length)
console.log(str1.toUpperCase())
console.log(str1.toLocaleLowerCase())
console.log(str1.slice(4,9))
console.log(str1.replace('Hello', 'Hey'))
console.log(str2)
console.log(str2.trim())
console.log(str1.concat(str2))

let str3 = 'ABC\t' + 'To\t' + 'XYZ'
console.log(str3)

// Use a for loop to print a String

for (let i = 0 ; i< str1.length ; i++) {
    console.log(str1[i])
}