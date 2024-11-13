arr=[1,2,3,4]

// 1 The forEach() method calls a function for each element in an array.
// 2 The forEach() method is not executed for empty elements.
// Syntax:
// array.forEach(callback(element, index, arr), thisValue);

console.log("forEach")
arr.forEach((element,index,arr) => {
    console.log(element,index,arr)
});


console.log("for..in")
const obj={
    a:1,
    b:2,
    c:3
}

for (const i in obj) {
    if (Object.hasOwnProperty.call(obj, i)) {
        const j = obj[i];
        console.log(i,j)
        
    }
}

console.log("for..of")
for (const i of arr){
    console.log(i)
}


//map
console.log("map() creates a new array from calling a function for every array element")
console.log("map() does not execute the function for empty elements")
console.log("map() does not change the original array.")

let b=[1,2,3,4,5]
result=[]
for(let i=0;i<b.length;i++){
    result.push(b[i]+100)
}
console.log("Using Normal Forloop :",result)

let c=[1,2,3,4,5]
let e=c.map(i=>{
    return i+100
})
console.log("Using Map Function   :",e)

function test(r){
    if(r>3){
        return true
    }
}

console.log(b.filter(test))

let add=(i,j)=>{
    return i+j
}
console.log(b.reduce(add))


console.log("Array from :")
console.log(Array.from("jitu"))

