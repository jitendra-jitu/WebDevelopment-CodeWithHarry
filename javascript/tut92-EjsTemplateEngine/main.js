const express = require('express')
const app = express()
const port = 3000

// app.use(express.static('views'));


// setting viewEngine - pug,templateEngine handle-bars
app.set("view engine","ejs");


app.get('/', (req, res) => {
 


    // serving ejs files 
    let brand="jitu placeholder";
    let search="search here placeholder";
    let arr=["arr0","arr1","arr2"];
    // res.render("index",{  brand:brand, search:search});


    res.render("index",{  brand, search,arr});


    

    //serving html files
    // res.sendFile("views/index.html",{root:__dirname});

    //serving data at server side
    // res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

