const { default: mongoose } = require("mongoose");

//connecting to database
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Company');
}
main().catch(err => console.log(err));

const employee=new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
});

let companydata=mongoose.model("Employees",employee);
module.exports=companydata;