'use strict'
// Import Mongoose
const mongoose = require('mongoose')

const foodSchema = mongoose.Schema({
    idCategories:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    },
    name: String,
    description : String,
    imgURL : String    
})

module.exports = mongoose.model('food', foodSchema)