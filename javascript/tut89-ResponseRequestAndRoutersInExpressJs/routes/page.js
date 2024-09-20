let express=require('express')
let router=express.Router()

router.get('/', (req, res) => {
  res.send('Home Page  !')
  console.log("GET Request for Home Page")
})



router.get('/about', (req, res) => {
  res.send('About Page !')
  console.log("GET Request for About page")
})


router.get('/contact', (req, res) => {
  res.send('page Contact Details !')
  console.log("GET Request for page Contact")
})

module.exports=router