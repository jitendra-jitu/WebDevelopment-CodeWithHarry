import fs from "fs";
import fspromises from "fs/promises";
import path from "path";


let dirpath="C:\\Users\\gudel\\OneDrive\\Documents\\WebDevelopment_CodeWithHarry\\javascript\\tut93-ex15Solution";
let files=await fspromises.readdir(dirpath);

for (const file of files) {

    const ext_name=file.split(".").at(-1);

    console.log(ext_name)


    if(ext_name!="js" && ext_name!="json"&& file.split(".").length>1 ){
        

        if(fs.existsSync(path.join(dirpath,ext_name))){

            fspromises.rename(path.join(dirpath,file),path.join(dirpath,ext_name,file))
    
        }
        else{
            fspromises.mkdirSync(path.join(dirpath,ext_name));
        }

    } 
    
   
    
}



