// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000|| 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

const Program = mongoose.model('Program', programSchema);

// Connect to MongoDB (replace 'your-database-connection-string' with your MongoDB connection string)
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for funding programs
const programSchema = new mongoose.Schema({
  name: String,
  description: String,
  fundingAmount: Number,
  applicationDeadline: Date,
});

// Define a MongoDB schema and model for your data
const requirementSchema = new mongoose.Schema({
  projectType: String,
  companySize: String,
  sector: String,
  annualElectricityBudget: Number,
  annualGasBudget: Number,
});

const Requirement = mongoose.model('Requirement', requirementSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API endpoint to handle form submissions
app.post('/api/submit-requirement', (req, res) => {
  const data = req.body;
  const requirement = new Requirement(data);

  requirement.save((err) => {
    if (err) {
      res.status(500).json({ error: 'Unable to save data' });
    } else {
      res.status(200).json({ message: 'Data saved successfully' });
    }
  });
});

app.post('/api/subscribe', (req, res) => {
  const data = req.body;
  const requirement = new Requirement(data);

  requirement.save((err) => {
    if (err) {
      res.status(500).json({ error: 'Unable to save data' });
    } else {
      res.status(200).json({ message: 'Data saved successfully' });
    }
  });

});

app.post('/api/contact', (req, res) => {
  const data = req.body;
  const requirement = new Requirement(data);

  requirement.save((err) => {
    if (err) {
      res.status(500).json({ error: 'Unable to save data' });
    } else {
      res.status(200).json({ message: 'Data saved successfully' });
    }
  });

});
app.post('/api/programs', async (req, res) => {
  try {
    const { name, description, fundingAmount, applicationDeadline } = req.body;
    const program = new Program({
      name,
      description,
      fundingAmount,
      applicationDeadline,
    });
    await program.save();
    res.status(201).json({ message: 'Program added successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
