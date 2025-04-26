"use server"
import fs from "fs/promises";
export const SubmitAction=async (e)=>{

    fs.writeFile("tesing.txt",`fecthed detils from the form name: ${e.get("name")},email : ${e.get("email")}`)
    console.log("name:",e.get("name"),"--> email:",e.get("email"));
    
}
