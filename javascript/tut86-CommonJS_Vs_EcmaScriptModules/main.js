// // const http = require('node:http');  //{CommonJS}***

// import  http  from "http";  //{ECMASCRIPT}***

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
// //   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello, World!</h1>\n ');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


//
///
////
// //////
// // 1 Named Exports 
// import {a,b,c} from "./EcmaScriptModule.js"
// console.log(a,b,c);


// // 2 Default Exports
// import def from "./EcmaScriptModule.js"
// console.log(def)






//
/////
///////
// CommonJS
////////////////


// // // // 1 Named Exports 
// const {a,b}=require('./CommonJs.js');
// console.log(a,b,__dirname,__filename)



// // // 2 Default Exports
const es=require('./CommonJs.js');
console.log(es,__dirname,__filename)




// NOTE 
// The primary object exported by the require() module is a function. When NodeJS invokes this require() function, it does so with a singular argument – the file path. 


// Wrapping:
// ------------
// Once the module is loaded , the module code is wrapped in a special function which will give access to a couple of objects. Wrapping is done to give that loaded file a private scope or local scope. So that it can’t be accessed globally.




// console.log(require("module").wrapper);

// // [
// //     '(function (exports, require, module, __filename, __dirname) { ',
// //     '\n});'
// // ]




//////////////////////////////////////////////////////////////////////////////////////////////
//
// diff b/w Named and Export (Key Differences)
// -------------------------------------------
// 
// 1 Syntax: ESM uses import and export, while CommonJS uses require and module.exports.
// 2 Default Export: In ESM, you use export default. In CommonJS, you assign the value directly to module.exports.
// 3 Named Export: In ESM, you use export { ... }. In CommonJS, you assign an object to module.exports
//
///////////////////////////////////////////////////////////////////////////////////////////////














