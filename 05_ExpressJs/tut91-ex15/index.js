
const path = require("path")
const fs = require("fs")

const files = ["name.jpg", "name.png", "this.pdf", "harry.zip", "Rohan.zip", "cat.jpg", "harry.pdf"];
// const files = ["name.jpg", "name.png", "this.pdf", "harry.zip", "Rohan.zip", "cat.jpg", "harry.pdf"];



function main() {
    for (let file of files) {

        // console.log(file)

        file=file.trim()

       
        const folder_name = path.extname(file).slice(1);
    
         // Asynchronously tests a user's permissions for the file specified by path.
            fs.access(`/${folder_name}`, (err) => {
                if (err) {
                    fs.mkdir(`${folder_name}`, (err) => {   
                    });
                }           
            })
            fs.writeFile(`${folder_name}/${file}`, 'hi',()=>{
            });
    }
}

main();















// console.log(path.dirname())




