// import mongoose
const mongoose = require('mongoose');

// create a schema
const Schema = mongoose.Schema;

// we need to declare the fields present in the mongodb collection
const paymentSchema = new Schema(
    {
        price: Number,
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
         address:{
            type: String,
            required: true
        }
    }
);
// create a model using the schema, connect to MongoDB and export the model
module.exports = mongoose.model('payment', paymentSchema, "payment");