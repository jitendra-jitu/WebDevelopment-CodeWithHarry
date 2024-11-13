let button=document.getElementById("btn")


// button.addEventListener("click",()=>{
//     alert("addEventListener by button")
//     document.querySelector(".box").innerHTML="text added through EventListener"
// })


// doubleclick
// button.addEventListener("dblclick",()=>{
//     alert("addEventListener by button")
//     document.querySelector(".box").innerHTML="text added through EventListener"
// })


// // rightclick
// button.addEventListener("contextmenu",()=>{
//     alert("addEventListener by button right click")
//     document.querySelector(".box").innerHTML="text added through EventListener"
// })


//keydown-press button and after press any button in keyboard
button.addEventListener("keydown",(e)=>{
    console.log(e)
    //e--> eventObject
    console.log(e.key,e.keyCode)
})


    

