let div=document.getElementById("test-div")   


//1  Reading Data Attributes
console.log(div.dataset.firstName);
console.log(div.dataset)

//2 Writing Data Attributes
div.dataset.test = "Hi"
console.log(div.dataset.test)
// Hi

//3 Updating Data Attributes
div.dataset.firstName = "Sally"
console.log(div.dataset.firstName)
// Sally


//4 Delete Data Attributes
delete div.dataset.active
console.log(div.dataset.active)
// undefined