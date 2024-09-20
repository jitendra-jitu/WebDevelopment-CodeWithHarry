const express = require('express')
const app = express()

// enable middleware to parse body of Content-type: application/json
app.use(express.json())

app.post('/', (req, res) => {
  // get request values inside req.body
  const price = req.body.price
  const orderId = req.body.orderId
  // use price, orderId to do something meaningful
  console.log(req);
})

app.listen(3000,()=>{
   console.log("listening")
})