import { Timestamp } from "bson";
import mongoose from "mongoose";
import { type } from "os";
import { boolean } from "webidl-conversions";



//ModelSchema
const ProjectSchema = new mongoose.Schema({
    Name: String,
    TechStack:String,
    IsAlPowered:{type:Boolean,required:true,default:false},
    Complexity:Number,
    TimeStamp:Date
  });


// Exporting schema-obj   
export const Project = mongoose.model('Project', ProjectSchema);