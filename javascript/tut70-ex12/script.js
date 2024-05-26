let x=Math.random()
console.log(x)
e=document.getElementsByClassName("box")
if(x<0.2){
    e[0].style.color="red"
    e[0].style.backgroundColor="red"
}
else if(x<0.4){
    e[1].style.color="pink"
    e[1].style.backgroundColor="pink"
}
else if(x<0.6){
    e[2].style.color="green"
    e[2].style.backgroundColor="green"
}
else if(x<0.8){
    e[3].style.color="yellow"
    e[3].style.backgroundColor="yellow"
}
else{
    e[4].style.color="grey"
    e[4].style.backgroundColor="grey"
}