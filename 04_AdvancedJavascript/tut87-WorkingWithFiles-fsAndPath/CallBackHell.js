// Callback hell
// ------------------

// 1 Callback hell refers to the situation in JavaScript where multiple nested callbacks create complex, deeply indented code, often called the “pyramid of doom.”
// 2 This structure makes the code difficult to read, debug, and maintain, resulting in poor code quality and scalability issues



fs.writeFile("jitu.txt","working with files:fs and path Modules",()=>{
    console.log("done");
    fs.readFile("jitu.txt",(error,data)=>{
        fs.writeFile("jitu.txt","working with files:fs and path Modules",()=>{
            console.log("done");
            fs.readFile("jitu.txt",(error,data)=>{
                fs.writeFile("jitu.txt","working with files:fs and path Modules",()=>{
                    console.log("done");
                    fs.readFile("jitu.txt",(error,data)=>{
                        fs.writeFile("jitu.txt","working with files:fs and path Modules",()=>{
                            console.log("done");
                            fs.readFile("jitu.txt",(error,data)=>{
                                fs.writeFile("jitu.txt","working with files:fs and path Modules",()=>{
                                    console.log("done");
                                    fs.readFile("jitu.txt",(error,data)=>{
                                        console.log(error,data.toString());
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
        console.log(error,data.toString());
    })
});
