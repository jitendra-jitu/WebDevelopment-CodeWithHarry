console.log("Hello World !!")

console.log(document.body)

// document.bo
// undefined

// document.body.fi
// undefined

// document.body.firstChild
// #text

// document.body.childNodes
// NodeList(5) [text, div.container, text, script, text]

// document.body.childNodes.ch
// undefined

// document.body.childNodes.forEach
// ƒ forEach() { [native code] }

// document.body.childNodes[1].childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]




// let cont=document.body.childNodes[1]
// undefined

// cont.childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

// cont.firstChild
// #text

// cont.firstElementChild
// <div class=​"box">​box1​</div>​

// cont.lastChild
// #text

// cont.lastElementChild
// <div class=​"box">​box5​</div>​

// cont.lastElementChild.style.color="red"
// 'red'

// cont.lastElementChild.style.backgroundColor="blue"
// 'blue'



// cont.previousSibling
// #text

// cont.parentElement
// <body>​…​</body>​<div class=​"container">​…​</div>​<script src=​"script.js">​</script>​</body>​

// cont.parentNode
// <body>​…​</body>​<div class=​"container">​…​</div>​<script src=​"script.js">​</script>​</body>​

// cont.offsetParent
// <body>​…​</body>​




// <---->  Comment Node

// document.body.firstElementChild.childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

// document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]




// document.body.firstElementChild.children[0]
// <div class=​"box">​box1​</div>​

// document.body.firstElementChild.children[1]
// <div class=​"box">​box2​</div>​

// document.body.firstElementChild.children[2]
// <div class=​"box">​box3​</div>​

// document.body.firstElementChild.children[3]
// <div class=​"box">​box4​</div>​

// document.body.firstElementChild.children[4]
// <div class=​"box">​box5​</div>​



// document.body.firstElementChild.children[3].previousSibling
// #text

// document.body.firstElementChild.children[3].nextSibling
// #text

// document.body.firstElementChild.children[3].previousElementSibling
// <div class=​"box">​box3​</div>​

// document.body.firstElementChild.children[3].nextElementSibling
// <div class=​"box">​box5​</div>​





// document.body.children[1].rows
// HTMLCollection(3) [tr, tr, tr]

// document.body.children[1].cells
// undefined

// document.body.children[1].cellPadding
// ''

// document.body.children[1].cells
// undefined

