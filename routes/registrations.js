const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// Get all registrations
router.get('/', async (req, res) => {
  try {
    const regs = await Registration.find().populate('eventId');
    res.json(regs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Register a user for an event
router.post('/', async (req, res) => {
  const registration = new Registration({
    name: req.body.name,
    email: req.body.email,
    eventId: req.body.eventId,
  });

  try {
    const newReg = await registration.save();
    res.status(201).json(newReg);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
