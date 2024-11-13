import fs from "fs/promises"




await fs.appendFile("jitu1.txt","\n\n\nAppended Something");

let a=await fs.readFile("jitu1.txt");




console.log(a.toString())



