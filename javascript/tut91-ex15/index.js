
const path = require("path")
const fs = require("fs")

const files = ["name.jpg", "name.png", "this.pdf ", "harry.zip", "Rohan.zip", "cat.jpg ", "harry.pdf"];
// const files = ["name.jpg", "name.png", "this.pdf", "harry.zip", "Rohan.zip", "cat.jpg", "harry.pdf"];




function main() {
    for (const file of files) {

        const folder_name = path.extname(file).slice(1);
    
            fs.access(`./${folder_name}`, (err) => {
                if (err) {
                    fs.mkdir(`./${folder_name}`, { recursive: true }, (err) => {   
                    });
                }           
            })
            fs.writeFile(`${folder_name}/${file}`, 'hi',()=>{
            });
    }
}

main();















// console.log(path.dirname())




