const mongoose = require('mongoose');

const viewOrderSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    details: [{
        menu_id: Number,
        menu_name: String,
        description: String,
        restaurant_id: Number,
        menu_image: String,
        menu_type: String,
        menu_price: String
    }],
    hotel_name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('viewOrder', viewOrderSchema, "viewOrder");