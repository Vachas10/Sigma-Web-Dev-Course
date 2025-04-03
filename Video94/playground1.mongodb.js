

// Select the database to use.
use('sigma');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
  {
    "name": "Java",
    "Price": 20000,
    "Instructor": "Harry"
  },
  {
    "name": "Python",
    "Price": 25000,
    "Instructor": "John"
  },
  {
    "name": "JavaScript",
    "Price": 22000,
    "Instructor": "Mike"
  },
  {
    "name": "C++",
    "Price": 18000,
    "Instructor": "Emma"
  },
  {
    "name": "Ruby",
    "Price": 23000,
    "Instructor": "Oliver"
  },
  {
    "name": "Swift",
    "Price": 24000,
    "Instructor": "Ava"
  },
  {
    "name": "PHP",
    "Price": 21000,
    "Instructor": "Liam"
  },
  {
    "name": "Go",
    "Price": 26000,
    "Instructor": "Sophia"
  },
  {
    "name": "Rust",
    "Price": 27000,
    "Instructor": "Noah"
  },
  {
    "name": "Kotlin",
    "Price": 28000,
    "Instructor": "Isabella"
  }
]
);



// Print a message to the output window.
console.log(`Done inserting data.`);

