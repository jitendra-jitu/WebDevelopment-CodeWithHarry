
let a=Math.random()
let b=Math.random()
function add(x,y){
    if(a<0.1){
        console.log(a-b)
    }
    else{
        console.log(a+b)
    }
}
function sub(x,y){
    if(a<0.1){
        console.log(a/b)
    }
    else{
        console.log(a-b)
    }
}
function mul(x,y){
    if(a<0.1){
        console.log(a+b)
    }
    else{
        console.log(a*b)
    }
}
function div(x,y){
    if(a<0.1){
        console.log(a**b)
    }
    else{
        console.log(a/b)
    }
}
console.log("using operaton")
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log("with the 10% false functions ")
add(a,b);
sub(a,b);
mul(a,b);
div(a,b);