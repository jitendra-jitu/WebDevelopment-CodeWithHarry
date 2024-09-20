let express=require('express')
let router=express.Router()

router.get('/', (req, res) => {
  res.send('Home Page BLOG !')
  console.log("GET Request for Home Blog")
})



router.get('/about', (req, res) => {
  res.send('About Blog !')
  console.log("GET Request for About Blog")
})


router.get('/contact', (req, res) => {
  res.send('Blog Contact Details !')
  console.log("GET Request for Blog Contact")
})

module.exports=router