// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const eventRoutes = require('./routes/events');
const registrationRoutes = require('./routes/registrations');

app.use('/events', eventRoutes);
app.use('/registrations', registrationRoutes);

// Export the app for Vercel
module.exports = app;
