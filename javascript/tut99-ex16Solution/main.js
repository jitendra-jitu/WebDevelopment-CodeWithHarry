const express = require('express');
const mongoose = require('mongoose');
const companydata = require('./models/company.js');
const app = express();
const port = 3000;

app.set("view engine", 'ejs');


app.get('/', (req, res) => {
    res.render('index', { content: 'Update Records' })
})


app.get('/generate', async (req, res) => {

    const companydatarecords = await companydata.find();

    if (companydatarecords.length !== 0) {
        await companydata.deleteMany({});
    }

    let jsondata=[];

    for (let i = 0; i < 10; i++) {

        let randomNames = ["Manny", "Aditi", "Sandy", "Keerthi", "Noodles", "Seshu", "Immu", "Chakri", "Happy", "Chaitu"];
        let randomCities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow"];
        let randomLanguages = ["JavaScript", "Python", "Java", "C++", "Ruby", "PHP", "C#", "Go", "Swift", "Rust"];

        let oneDigit = Math.floor(Math.random() * 10); // Random index from 0 to 9
        let salary = Math.floor(Math.random() * (50 - 4 + 1)) + 4;

        let data = await companydata.create({
            name: randomNames[oneDigit],
            salary: salary * 100000,  // Generate random salary
            language: randomLanguages[oneDigit],
            city: randomCities[oneDigit],
            isManager: Math.random() < 0.2  // Randomly assign true or false
        });

        jsondata.push(data)
        console.log(data)

        
    }
    console.log("Company data records updated successfully...!!");
    res.render('index', { content: 'Update Records' })
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})