
const mongoose = require('mongoose');

const wasteDisposalLocationSchema = new mongoose.Schema({
  name: String,
  latitude: Number,
  longitude: Number,
  address: String,
});

const WasteDisposalLocation = mongoose.model('WasteDisposalLocation', wasteDisposalLocationSchema);

module.exports = WasteDisposalLocation;
