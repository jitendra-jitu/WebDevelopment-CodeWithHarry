
console.log("for loop :")

for(let i=0;i<10;i++){
    console.log(i)
}

// 1  

// Expression 1 is executed (one time) before the execution of the code block(index = 0).

// Expression 2 defines the condition for executing the code block(index < array.length).

// Expression 3 is executed (every time) after the code block has been executed(index++).

// 
////
// structure of forloop--->

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


// 2 for in 

console.log("for..in :")

let accenture={
    "company type":"MNC",
    branches:40,
    employees:200000
}


for (const key in accenture) {
        const element = accenture[key];
        console.log(key,element)
}
      

// 3 forof 

// The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.
//  Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList 
//  (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.

console.log("for..of :")

for(const k of "jitu"){
    console.log(k)
}


// 4 while

// The while loop loops through a block of code as long as a specified condition is true

console.log("while:")
j=0
while(j<7){
    console.log(j)
    j++
}


// 5 do while

// The do while loop is a variant of the while loop. 
// This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.


console.log("do while:")
k=18
do {
    console.log(k)
    k++
} while (k<17);
