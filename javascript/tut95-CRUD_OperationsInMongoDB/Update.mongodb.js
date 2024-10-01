use('CRUD')

// updateOne
// db.courses.updateOne({"timeNeeded": "6 months"},{$set:{"timeNeeded": "0.5 year"}})


// updateMany
// db.courses.updateMany({"timeNeeded": "6 months"},{$set:{"timeNeeded": "0.5 year"}})


// similar to updateOne(***Deprecated)-->DeprecationWarning: Collection.update() is deprecated. Use updateOne, updateMany, or bulkWrite.
db.courses.update({"timeNeeded": "5 months"},{$set:{"timeNeeded": "5-month"}})

