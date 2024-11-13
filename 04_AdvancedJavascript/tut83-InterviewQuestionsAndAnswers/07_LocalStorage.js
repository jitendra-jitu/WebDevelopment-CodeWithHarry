// if(localStorage.getItem("name")){
//     a=localStorage.getItem("name")
//     console.log("Welcome "+a)
// }
// else{
//     a=prompt("Enter Something..!!")
//     localStorage.setItem("name",a)
//     document.write("Welcome "+a)git 
// }



function localStorageManager(note) {
    note=localStorage.setItem("noteee",note)
}

if(localStorage.getItem("noteee")){
    document.querySelector("button").addEventListener("click",()=>{
        note=localStorage.getItem("noteee")
        console.log("Welcome "+note)
    })
}
else{
    note=prompt("Enter Something..!!")
    localStorageManager(note)
    document.write("Welcome "+note)
}