const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const locationRoutes = require('./routes/locationRoutes');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define Routes
app.use('/api/locations', locationRoutes);

// Health Check
app.get('/health', (req, res) => res.send('API Running'));

module.exports = app;