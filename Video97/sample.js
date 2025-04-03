const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public')); // Serve static files

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/company')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Employee Schema
const employeeSchema = new mongoose.Schema({
  name: String,
  role: String,
  timestamp: { type: Date, default: Date.now }
});

// Model
const Employee = mongoose.model('Employee', employeeSchema);

// POST Route to Add Employee
app.post('/add-employee', async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).json({ message: 'Employee added successfully!', data: newEmployee });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
