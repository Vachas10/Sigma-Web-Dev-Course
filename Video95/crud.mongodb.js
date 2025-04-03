use("CrudDb")

// db.createCollection("courses")

// db.courses.insertOne({
//     name: "Harry's web dev free course",
//     price: 0,
//     assignments: 12,
//     projects: 45
// })

// db.courses.insertMany([
//     {
//       "name": "Harry's Web Dev Free Course",
//       "price": 0,
//       "assignments": 12,
//       "projects": 45
//     },
//     {
//       "name": "Harry's Web Dev Pro Course",
//       "price": 100,
//       "assignments": 15,
//       "projects": 50
//     },
//     {
//       "name": "Harry's Web Dev Advanced Course",
//       "price": 200,
//       "assignments": 18,
//       "projects": 55
//     },
//     {
//       "name": "Harry's Web Dev Expert Course",
//       "price": 300,
//       "assignments": 20,
//       "projects": 60
//     },
//     {
//       "name": "Harry's Web Dev Master Course",
//       "price": 400,
//       "assignments": 22,
//       "projects": 65
//     },
//     {
//       "name": "Harry's Web Dev Premium Course",
//       "price": 500,
//       "assignments": 25,
//       "projects": 70
//     },
//     {
//       "name": "Harry's Web Dev Elite Course",
//       "price": 600,
//       "assignments": 28,
//       "projects": 75
//     },
//     {
//       "name": "Harry's Web Dev Ultimate Course",
//       "price": 700,
//       "assignments": 30,
//       "projects": 80
//     },
//     {
//       "name": "Harry's Web Dev Supreme Course",
//       "price": 800,
//       "assignments": 32,
//       "projects": 85
//     },
//     {
//       "name": "Harry's Web Dev Ultra Course",
//       "price": 900,
//       "assignments": 35,
//       "projects": 90
//     }
//   ]
//   )

let a = db.courses.find({price:50})
console.log(a.count());


// db.courses.updateMany(
//     { price: 0 },
//     { $set: { price: 50 } }
//   )

// db.courses.deleteOne({price:50})


// db.courses.find({ price: { $eq: 500 } })
// db.courses.find({ price: { $gt: 500 } })
// db.courses.find({ price: { $in: [200, 300, 500] } })
// db.courses.find({ price: { $in: [20, 30, 500] } })
// db.courses.find({ $and: [{ price: { $gt: 200 } }, { price: { $lt: 500 } }] })
// db.courses.find({ name : { $all: [ "Harry's web dev free course" ] } })


  