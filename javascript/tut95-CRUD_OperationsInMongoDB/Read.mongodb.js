
use('CRUD')


// simple read operations
// --------------------------


//1  find only one (That to bee first)
// db.courses.findOne({"timeNeeded": "3 months"})


// find all 
db.courses.find({ "timeNeeded": "3 months" })





//complex updations while readind the data
// -----------------------------------------=



// findOneAndUpdate
// db.courses.findOneAndUpdate({ "timeNeeded": "3 months" },{$set:{ "timeNeeded": "1/4 year" }})



// findOneAndReplace
db.courses.findOneAndReplace({ "timeNeeded": "3 months" },{$set:{ "timeNeeded": "1/4 year" }})



//findAndModify 
// db.courses.findAndModify(
//     {
//         query: { "timeNeeded": "3 months" },
//         update: {
//             $set: { "timeNeeded": "0.25 year" }
//         }
//     }
// )