const mongoose = require('mongoose');

const farmerProductSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productDescription: { type: String, required: true },
  productPrice: { type: Number, required: true },
  productCategory: { type: String, required: true },
  productImage: { type: String, required: true }
});

const FarmerProduct = mongoose.model('FarmerProduct', farmerProductSchema);

module.exports = FarmerProduct;
