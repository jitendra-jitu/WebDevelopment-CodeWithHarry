let a="jitu"
console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a.length)
let b="Panda"
console.log(a+" and "+b+" are friends")


//
//// Template Literal
console.log(`${a} and ${b} are friends`)

// Template Literal in ES6 provides new features to create a string that gives more 
// control over dynamic strings. Traditionally, String is created using single quotes 
// (‘) or double quotes (“) quotes. Template literal is created using the backtick (`) character.

console.log(b.toLowerCase)
console.log(b.toUpperCase)
console.log(b.length)
console.log(b.slice(1,5))

console.log(b.replace("Pa","aa"))
console.log(a.concat(b,"immu"))

console.log(b)
// string is immutable 

console.log("charAt: "+b.charAt(1))
console.log("indexOf:"+b.indexOf("da"))

console.log(b.startsWith("P"))
console.log(b.endsWith("a"))

let c=new String("cpt training");
console.log(c)


//multi-line string
let multiline_string=  
`this 
is a 
multiline string`
console.log(multiline_string)