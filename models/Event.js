const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Event title is required']
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Event', EventSchema);
