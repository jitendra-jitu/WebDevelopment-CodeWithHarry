function statement(name){
    console.log(name+" is the employee of the company");
}

statement("jitu")
statement("seshu")
statement("immu")


// structure of function :

// function name(params) {
    
// }


function add(a,b,c=0) {
    console.log(a,b,c)
    console.log(a+b+c)
}

add(1);
add(1,2);
add(1,2,3);

const arrow=(x)=>{
    console.log("its an arrow function",x);
}

arrow(1);
arrow(2);
arrow(3);

//
////
//////Arrow Function in JavaScript //////

// Arrow functions are anonymous functions i.e. they are functions without a name and are not bound by an identifier. Arrow functions do not return any value and can be declared without the function keyword. They are also called Lambda Functions.

// 1 Arrow functions do not have the prototype property like this, arguments, or super.
// 2 Arrow functions cannot be used with the new keyword.
// 3 Arrow functions cannot be used as constructors.


