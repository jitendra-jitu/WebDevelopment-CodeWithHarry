
const sum = async (a, b, c)=>{
    return a+b+c
}

(async function main(){ 
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b);

    // let [x, y, rest] = [1, 5, 7, 8, 9, 10]
    // console.log(x, y, rest)

    let obj = {
        a: 1, 
        b: 2,
        c: 3
    }

    let {a, b} = obj
    console.log(a, b)

    let arr = [1, 4, 6]
    console.log(sum(arr[0], arr[1], arr[2]))
    console.log(sum(...arr))

    
})()



// Immediately Invoked Function Expressions
// ----------------------------------------
// 1 Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined.
// 2 They are typically used to create a local scope for variables to prevent them from polluting the global scope.

var a1 = 6;


const sleep = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
// let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b);


console.log(a1);