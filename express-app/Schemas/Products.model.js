const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: Number,
    costPrice: Number,
    imageUrl: String,
    description: String
});

const Product = new mongoose.model('products', ProductsSchema);

module.exports = Product;