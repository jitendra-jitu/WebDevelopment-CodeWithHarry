// JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.

// ECMAScript is the official name of the language.

// ECMAScript versions have been abbreviated to ES1, ES2, ES3, ES5, and ES6.

var a=3
var b=4
var c="jitu"

console.log(a+b+8)

console.log(a+b+c)

console.log(typeof a,typeof b, typeof c)

{
    let a=7 
    //let is block scopped keyword
    console.log(a)
}

const h=5
// h=h+1         //not allowed to change the const variable


let  x=3
let y=3.33
let z="jitu"
let p=null
let q=undefined
let r=true

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)


//objects in js

let info={
    name:"jitu",
    "year of study":3,
    dept:"cse"
}
console.log(info)
info.year=4
info.college="nri"
console.log(info)




// datatypes in js ===>



////// 1 primitive datatype //////

// 1 Number: JavaScript numbers are always stored in double-precision 64-bit binary format IEEE 754. Unlike other programming languages, you don’t need int, float, etc to declare different numeric values.
// 2 String: JavaScript Strings are similar to sentences. They are made up of a list of characters, which is essentially just an “array of characters, like “Hello GeeksforGeeks” etc.
// 3 Boolean: Represent a logical entity and can have two values: true or false.
// 4 Null: This type has only one value that is null.
// 5 Undefined: A variable that has not been assigned a value is undefined.
// 6 Symbol: Symbols return unique identifiers that can be used to add unique property keys to an object that won’t collide with keys of any other code that might add to the object.
// 7 BigInt: BigInt is a built-in object in JavaScript that provides a way to represent whole numbers larger than 253-1.



///// 2 Non-Primitive Data Types //////

// 1 Object: It is the most important data type and forms the building blocks for modern JavaScript. We will learn about these data types in detail in further articles.