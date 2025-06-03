const mongoose = require('mongoose');

const generationSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['blog', 'tweet', 'story']
  },
  prompt: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  temperature: {
    type: Number,
    required: true,
    min: 0,
    max: 1
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Generation', generationSchema); 