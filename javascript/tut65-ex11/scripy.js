num=prompt("enter the number:" )


let fact_num=(a)=>{
    fact=1
    for(let i=a;i>0;i--){
        fact*=i
        
    }
    console.log(fact)
}
fact_num(num)
