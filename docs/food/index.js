const getFoods = require('./get-foods');
const getFood = require('./get-food');
const createFood = require('./create-food')
const deleteFood = require('./delete-food')

const getCategories = require('../categories/get-categories')
const getCategoriess = require('../categories/get-categories')
const createCategories = require('../categories/create-categories')
const deleteCategories = require('../categories/delete-categories')

module.exports = {
    paths:{
        '/food':{
            ...getFoods,
            ...createFood,
        },
        '/food/{id}':{
            ...getFood,
            ...deleteFood
        },
        '/categories':{
            ...getCategoriess,
            ...createCategories
        },
        '/categories/{id}':{
            ...getCategories,
            ...deleteCategories
        }
    }
}