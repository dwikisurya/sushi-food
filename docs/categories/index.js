const getCategories = require('./get-categories');
const getCategoriess = require('./get-categoriess');
const createCategories = require('./create-categories')


module.exports = {
    paths:{
        '/categories':{
            ...getCategoriess,
            ...createCategories
        },
        '/categories/{id}':{
            ...getCategories,
        }
    }
}