const food = require('../models/food')

module.exports = class FoodControllers {
    
    // Get
    static read(request, response) {
            food.find({}, (err, food) => {
            if (err) {
            response.status(500).send(err)
            }
            response.status(200).json(food)
            })
        }

    static readOne(request, response){
            const id = request.params.id
            food.findById({_id:id} , (err, food)=>{
                if(err){
                response.status(500).send(err)
                }
                response.status(200).json(food)
            })
    }
 }
