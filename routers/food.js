const foodRouter = require('express').Router()
const FoodControllers = require('../controllers/FoodControllers')

/*
Router.get / .post / .delete / .patch / .put
*/
foodRouter.get('/', FoodControllers.read)
foodRouter.get('/:id', FoodControllers.readOne)

module.exports = foodRouter

