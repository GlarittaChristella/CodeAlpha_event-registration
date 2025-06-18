const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const eventRoutes = require('./routes/events');
const registrationRoutes = require('./routes/registrations');

app.use('/events', eventRoutes);
app.use('/registrations', registrationRoutes);

// DB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });

// 👇 Export the app instead of listening
module.exports = app;
