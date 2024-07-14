const mongoose = require('mongoose');

const farmeraddproductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productCategory: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    }
});

const FarmerAddProduct = mongoose.model('FarmerAddProduct', farmeraddproductSchema);

module.exports = FarmerAddProduct;
