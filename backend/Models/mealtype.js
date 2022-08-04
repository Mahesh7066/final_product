const mongoose = require('mongoose');

const mealtypeSchema = new mongoose.Schema({
    restaurant_id: {
        type: Number,
        required: true
    },
    restaurant_name: {
        type: String,
        required: true
    },
    location_id: {
        type: Number,
        required: true
    },
    state_id: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    restaurant_thumb: {
        type: String,
        required: true
    },
    average_rating: {
        type: Number,
        required: true
    },
    rating_text: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    contact_number: {
        type: Number,
        required: true
    },
    mealTypes: [{
        mealtype_id: Number,
        mealtype_name: String
    }],
    cuisines: [{
        cuisine_id: Number,
        cuisine_name: String
    }],
    image_gallery: [{
        type: String
    }]
})

module.exports = mongoose.model('mealtype', mealtypeSchema, "mealtype");