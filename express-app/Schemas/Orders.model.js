const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({
    user_id: {
        type: String
    },

    time: {
        type: String
    },

    price: {
        type: String
    },

    products: {
        type: Array
    },

    completed: {
        type: Boolean,
        default: false
    }
});

const Order = new mongoose.model('orders', OrdersSchema);

module.exports = Order;