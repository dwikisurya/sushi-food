'use strict'
// Import Mongoose
const mongoose = require('mongoose')

const foodSchema = mongoose.Schema({
    name: String,
    description : String,
    imgURL : String    
})

module.exports = mongoose.model('food', foodSchema)