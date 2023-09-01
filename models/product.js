const mongoose = require("mongoose")

// create schema and model
const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "price must be included"],
    },
    featured: {
        type: Boolean,
        default : false,
    },
    rating: {
        type: Number,
        default : 4.9,
    }, 
    createdAt: {
        type: Date,
        default : Date.now(),
    },
    company: {
        type: String,
        enum :{
            values:["apple","samsung","dell","mi"],
            message: `{VALUE} is not supported`
        },
    }
})

module.exports = mongoose.model("Product", productSchema)