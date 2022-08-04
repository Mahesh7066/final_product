// import mongoose
const mongoose = require('mongoose');

// create a schema
const Schema = mongoose.Schema;

// we need to declare the fields present in the mongodb collection
const quicksearchSchema = new Schema(
    {
        mealtype_id: {
            type: Number,
            required: true
        },
        mealtype: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    }
);
// create a model using the schema, connect to MongoDB and export the model
module.exports = mongoose.model('quicksearch', quicksearchSchema, "quicksearch");