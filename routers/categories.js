const categoriesRouter = require('express').Router()
const categoriesController = require('../controllers/CategoriesController')

/*
Router.get / .post / .delete / .patch / .put
*/
categoriesRouter.get('/', categoriesController.read)
categoriesRouter.get('/:id', categoriesController.readOne)
categoriesRouter.post('/', categoriesController.create)

module.exports = categoriesRouter