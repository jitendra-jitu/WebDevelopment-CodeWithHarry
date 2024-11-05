import express from "express";
import mongoose from "mongoose";
import { Employee } from "./models/Company.js";



let randomNames = ["Manny", "Aditi", "Sandy", "keerthi", "Noodles", "seshu", "immu", "Chakri", "happy", "chaitu"];
let randomCities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow"];
let randomLanguages = ["JavaScript", "Python", "Java", "C++", "Ruby", "PHP", "C#", "Go", "Swift", "Rust"];

const app = express();

app.get("/", async (req, res) => {

    const Employeerecords = await Employee.find({});

    if (Employeerecords.length != 0) {
        await Employee.deleteMany({});
        // await Company.remove({})
    }

    for (let i = 0; i < 10; i++) {
        let randNumber = Math.random();
        let oneDigit = Math.floor(randNumber * 10);
        let salary = Math.floor((Math.random())*(50-4+1))+4;

        
        // Create a new Company object
        const employee = new Employee({
            name: randomNames[oneDigit],
            salary: salary*100000,  // Generate random salary
            language: randomLanguages[oneDigit],
            city: randomCities[oneDigit],
            isManager: randNumber < 0.2  // Randomly assign true or false
        });

        await employee.save();
    }

    res.send("Employeee records updated..!!")


})

app.listen(3000, () => {

})