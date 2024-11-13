import mongoose from "mongoose";
import express from "express";
import { Project } from "./models/Project.js";

let connection=await mongoose.connect('mongodb://127.0.0.1:27017/Todo');

const app = express()
const port = 3000


app.get('/', (req, res) => {

    // const project1=new Project({Name:"SpotifyClone",TechStack:"MeanStack",IsAlPowered:false,Complexity:70,TimeStamp:new Date(Date.now())})
    // project1.save()

    // const project2=new Project({Name:"AIJobPortal",TechStack:"JavaFullStack",IsAlPowered:true,Complexity:80,TimeStamp:new Date(Date.now())})
    // project2.save()


    const project3=new Project({Name:"BlockchainbasedVotingSystem",TechStack:"BlockChain",Complexity:70,TimeStamp:new Date(Date.now())})
    project3.save()

  res.send('Hello World!')

})



app.get('/jobportal',async (req, res) => {

   let data= await Project.findOne({Name:"AIJobPortal"})
   res.json(data);
  
})


app.get('/spotify',async (req, res) => {

    let data= await Project.findOne({Name:"SpotifyClone"})
    res.json(data);
   
})


app.get('/allprojects',async (req, res) => {

    let data= await Project.find({})
    res.json(data);
   
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
