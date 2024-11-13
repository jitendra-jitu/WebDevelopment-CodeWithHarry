console.log("boxes")

let boxes=document.getElementsByClassName("box")
console.log(boxes)
boxes[2].style.backgroundColor="red"

document.getElementById("green").style.backgroundColor="green"

console.log(document.getElementsByClassName("box"))

document.querySelector(".box").style.backgroundColor="blue"
//returns the first selector of given 

document.querySelectorAll(".box")
//returns the all selectors of given name in the document

document.querySelectorAll(".box").forEach(r=>{
    r.style.borderColor="violet"
    // r.style.backgroundColor="violet"
})

console.log(document.getElementsByTagName("div"))
//return the html collection by html given tag(like div...as above)




// 1 matches 

let e=document.getElementsByTagName("div")
console.log(e[5].matches("#green"))
// false
console.log(e[4].matches("#green"))
// true



//2 closest

console.log(e[3].closest("html"));
// Returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise.

// console.log(e[3].closest("#green"));
// null


// console.log(e[3].closest(".container"));
// // <div class=​"container">​…​</div>​

// console.log(e[3].closest("body"));
// // <body>​…​</body>​



// 3 contains

console.log(document.querySelector(".container").contains(document.getElementById("#green")))
// false
console.log(document.querySelector(".container").contains(document.getElementById("body")))
// false
