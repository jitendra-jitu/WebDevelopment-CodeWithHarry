let rand=Math.random();
console.log(rand)

let a=prompt("enter the number1");
let b=prompt("enter the number2");
let c=prompt("enter the operation");


let ob={
    "+":"-",
    "-":"/",
    "*":"+",
    "/":"**"
}


if(rand>0.1){
    console.log(`result is ${eval(`${a} ${c} ${b}`)} `)
    alert(`result is:${eval(`${a} ${c} ${b}`)}`)
}
else{
    b=ob[b]
    console.log(`result is:${eval(`${a} ${c} ${b}`)}`)
    alert(`result is:${eval(`${a} ${c} ${b}`)}`)  
}

