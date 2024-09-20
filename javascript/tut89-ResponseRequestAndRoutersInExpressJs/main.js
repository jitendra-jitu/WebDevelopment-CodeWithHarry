const express = require('express')
const blog = require('./routes/blog')
const page = require('./routes/page')
const app = express()
const port = 3000




app.use(express.static('public'))
app.use('/blog',blog)
app.use('/page',page)



// app.get('/', (req, res) => {
//   res.send('Hello World GET!')
//   console.log("GET Request")
// })

app.get('/index', (req, res) => {

  // res.send('Hello World GET!')

  //SERVING FILES(Like html,css)
  // res.sendFile('templates/index.html',{root:__dirname})

  //serving json data
  res.json({a:1,b:{p:1,q:2}})

  console.log("GET Request")
  
})


app.post('/', (req, res) => {
  res.send('Hello World POST!')
  console.log("POST Request")
})

app.put('/', (req, res) => {
  res.send('Hello World PUT!')
  console.log("PUT Request")
})

app.delete('/', (req, res) => {
  res.send('Hello World DELETE !')
  console.log("DELETE Request")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//
////
///////
// Chaining of requests
// ----------------------
// app.post('/', (req, res) => {
//   res.send('Hello World POST!')
//   console.log("POST Request")
// }).put('/', (req, res) => {
//   res.send('Hello World PUT!')
//   console.log("PUT Request")
// }).delete('/', (req, res) => {
//   res.send('Hello World DELETE !')
//   console.log("DELETE Request")
// }).listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })