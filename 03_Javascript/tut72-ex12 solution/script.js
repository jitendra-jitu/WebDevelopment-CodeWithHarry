// // console.log(Math.ceil(Math.random() * 255 + 0))
// // syntax :
// // console.log(Math.ceil(min + Math.random() * (max - min)))







// let boxes=document.querySelector(".container").children
let boxes=document.getElementsByClassName("box")


function RandomColor() {
    let red=Math.ceil(0+Math.random() * 255);
    let blue=Math.ceil(0+Math.random() * 255);
    let green=Math.ceil(0+Math.random() * 255);
    return `rgb(${red}, ${blue}, ${green})`
}



Array.from(boxes).forEach(e=>{
        e.style.backgroundColor=RandomColor()
        e.style.color=RandomColor()
})
 



    




