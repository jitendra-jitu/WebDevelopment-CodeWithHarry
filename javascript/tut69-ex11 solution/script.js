n=4

// The Array.from() method returns an array from any object with a length property.

// The Array.from() method returns an array from any iterable object.

// Syntax :
// Array.from(object, mapFunction, thisValue)

function factorial(number){
    let arr=Array.from(Array(number+1).keys())
    console.log(arr.slice(1,).reduce((x,y)=>{
        return x*y ;
    }))
} 
factorial(n)



//No Need of return in Lambda statements

function factorial(number){
    let arr=Array.from(Array(number+1).keys())
    console.log(arr.slice(1,).reduce((x,y)=> x*y))
} 
factorial(n)
