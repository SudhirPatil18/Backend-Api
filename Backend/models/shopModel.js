const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  shopPhoto: { type: String, required: true },
  aadharCard: { type: String, required: true },
  panCard: { type: String, required: true },
  idVerification: { type: String, required: true },
  phoneVerification: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  // confirmPassword: { type: String, required: true },
});

module.exports = mongoose.model('Shop', shopSchema);
