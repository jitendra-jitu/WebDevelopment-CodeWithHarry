import path from "path"

console.log(path);

let p="C:\\Users\\gudel\\OneDrive\\Documents\\WebDevelopment_CodeWithHarry\\javascript\\tut87-WorkingWithFiles-fsAndPath"

let dir_name=path.dirname(p);
let basename=path.basename(p);
let extname=path.extname(p);

console.log(dir_name)
console.log(basename)
console.log(extname)

let q="/jitu.txt";
console.log(path.join(p,q))