const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema(
    {
        menu_id: {
            type: Number,
            required: true
        },
        menu_name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        restaurant_id:  {
            type: Number,
            required: true
        },
        menu_image: {
            type: String,
            required: true
        },
        menu_type: {
            type: String,
            required: true
        },
        menu_price:  {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('menu', menuSchema, "menu");