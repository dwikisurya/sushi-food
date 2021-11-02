const food = require('../models/food')

module.exports = class FoodControllers {
    
    // Get
    static read(request, response) {
            food.find()
            .populate({
                path: 'idCategories',
                select: 'nameCategories -_id'
            })
            .then((result) => {
                response.status(200).json(result)
            }).catch((err) => {
                response.status(500).json(err)
            })
        }

    // Get one
    static readOne(request, response){
            const id = request.params.id
            food.findById({_id:id} , (err, food)=>{
                if(err){
                response.status(404).send(err)
                }
                response.status(200).json(food)
            })
    }

    // Create
    static create(request, response){
        const {idCategories, name, description, imgURL} = request.body

        food.create({
            idCategories,
            name,
            description,
            imgURL
        }).then((result) => {
            response.status(201).json({ msg: 'Data Berhasil Ditambah'})
        }).catch((err) => {
            response.status(500).json(err)
        })
    }

 }
