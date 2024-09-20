const express = require('express')
const app = express()
const port = 3000
const fs =require("fs")

const blog=require("./routes/Blog")


// built-in Middleware
// app.use(express.static('public'))


// Router-level middleware
// Blog router first, then logging middleware
app.use("/blog", blog, (req, res, next) => {
    console.log("Routed at main");
    next();
});




// Application-level middleware
// middleware_1
app.use((req,res,next)=>{

    //Printing req.headers
    // console.log(req.headers);


    // Assigning values to req objects 
    req.user="Middleware1 - > jitu"


    console.log("middleware m1");

    fs.appendFileSync("fs/MiddlewareFile.txt",`${new Date(Date.now()).toTimeString()}, is a ${req.method}\n`)

    // res.send("Response sent from Middleware_1");
    // its directly send the response to the client without allowing it to next() 
    // & also generates err if there is any next() after it at the same Middleware

    next()  
    // you can stop the  res at any  middle-ware only by removing next()

})


//middleware_2
app.use((req,res,next)=>{

    console.log("middleware m2");
    
    req.user="Middleware2 - > Manny"
    
    next()
    
})



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/about', (req, res) => {
    res.send(`Hello ${req.user}!`)
})


//without built-in middle-ware
app.get('/jitu.txt', (req, res) => {
    res.send('Hello jitu!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



// TYPES OF MIDDLE-WARE
// ---------------------

// Application-level middleware
// Router-level middleware
// Error-handling middleware
// Built-in middleware
// Third-party middleware