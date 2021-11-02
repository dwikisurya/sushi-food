'use strict'
// Import Mongoose
const mongoose = require('mongoose')

const categoriesSchema = mongoose.Schema({
    nameCategories: String,
})

module.exports = mongoose.model('categories', categoriesSchema)