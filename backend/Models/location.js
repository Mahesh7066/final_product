// import mongoose
const mongoose = require('mongoose');

// create a schema
const Schema = mongoose.Schema;

// we need to declare the fields present in the mongodb collection
const locationSchema = new Schema(
    {
        location_id: {
            type: Number,
            required: true
        },
        location_name: {
            type: String,
            required: true
        },
        state_id: {
            type: Number,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        country_name: {
            type: String,
            required: true
        }
    }
);
// create a model using the schema, connect to MongoDB and export the model
module.exports = mongoose.model('location', locationSchema, "location");