const { error } = require('console');
const fs =require('fs')
// console.log(fs)

console.log("start");

// fs.writeFileSync("jitu.txt","wprking with files:fs and path Modules",()=>{
//     console.log(done)
// });

fs.writeFile("jitu.txt","working with files:fs and path Modules",()=>{
    console.log("done");
    fs.readFile("jitu.txt",(error,data)=>{
        console.log(error,data.toString());
    })
});

console.log("ended");


fs.appendFile("jitu.txt"," \n\n\nSomething Appended !!",(error,data)=>{
    console.log(data);
});



