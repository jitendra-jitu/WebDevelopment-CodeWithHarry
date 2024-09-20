const express = require('express')
const app = express()
const port = 3000

// the following code to serve images, CSS files, and JavaScript files in a directory named publi
app.use(express.static('public'))

// app.get or app.post or app.delete or app.put(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World21!')

})



app.get('/home', (req, res) => {
    res.send('Welcome!')
})

app.get('/contact', (req, res) => {
    res.send('contact details!')
})

app.get('/course', (req, res) => {
    res.send('course details are here!')
})


// app.get('/course/python', (req, res) => {
//     res.send('you can learn python here!')
// })
// app.get('/course/javascript', (req, res) => {
//     res.send('you can learn javascript here')
// })

// Alternative for above code by using endpoints

app.get('/course/:slug', (req, res) => {
    res.send(`you can learn ${req.params.slug} here`)
})

app.get('/course/:first/:second', (req, res) => {
    res.send(`you can learn ${req.params.first} and ${req.params.second} here`)

    //////////////////////////////////////////////////////////////
    // by Browsing link :
    // http://localhost:3000/course/python/js?mode=dark&region=in
    //////////////////////////////////////////////////////////////

    console.log(req.params);
    // params: { first: 'python', second: 'js' },

    console.log(req.query);
    // query: { mode: 'dark', region: 'in' },

    console.log(req);
    //to view req objectt
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// app.listen([port[, host[, backlog]]][, callback])
// ------------------------------------------------------
// 1 Binds and listens for connections on the specified host and port. 
// 2 This method is identical to Node’s http.Server.listen().





// Serving static files in Express
// ----------------------------------
//1  To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

//2  The function signature is:
// express.static(root, [options])