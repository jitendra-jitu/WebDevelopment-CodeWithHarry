import mongoose from "mongoose";

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

})

// export let Company=mongoose.model("company",employee);

export let Employee = mongoose.model("employee", employee, "EmployeeList");
