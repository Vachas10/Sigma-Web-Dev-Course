import mongoose from "mongoose";    
import express from "express";
import { Todo } from "./models/todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo");


const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({title: 1, desc: "The OG web developer!", isDone: false, days: 33})
    todo.save()
    
    
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})