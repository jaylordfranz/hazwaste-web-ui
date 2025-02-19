const mongoose = require('mongoose');

const classificationSchema = new mongoose.Schema({
  imageUrl: String,
  result: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Classification', classificationSchema);
