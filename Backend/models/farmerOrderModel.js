const mongoose = require('mongoose');

const farmerOrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  orders: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('FarmerOrder', farmerOrderSchema);
