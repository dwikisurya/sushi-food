const getFoods = require('./get-foods');
const getFood = require('./get-food');
const createFood = require('./create-food')


module.exports = {
    paths:{
        '/food':{
            ...getFoods,
        },
        '/food/{id}':{
            ...getFood,
        }
    }
}