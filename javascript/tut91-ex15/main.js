const path = require("path");
const fs = require("fs");

const files = ["name.jpg", "name.png", "this.pdf", "harry.zip", "Rohan.zip", "cat.jpg", "harry.pdf"];


    for (const file of files) {
        // Get the folder name based on the file extension, removing the leading dot
        const folder_name = path.extname(file).slice(1);

        // Remove any trailing spaces from the file name

        // Check if the folder exists
        fs.access(`./${folder_name}`, (err) => {
            if (err) {
                // If folder doesn't exist, create it
                fs.mkdir(`./${folder_name}`, { recursive: true }, (err) => {
                    
                });
            }
        });

        fs.writeFile(`${folder_name}/${file}`, 'hi', (err) => {
            
        })
    
    }



  

