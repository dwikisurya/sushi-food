const food = require('../models/food')
const imgbbUploader = require("imgbb-uploader")
const multer = require('multer')

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
        const {idCategories, name, description, base64} = request.body

        const options = {
            apiKey: process.env.IMGBB_API_KEY, // MANDATORY                              
            base64string: base64
          };
        
          imgbbUploader(options)
          .then((res) =>  
          food.create({
            idCategories,
            name,
            description,
            imgURL: res.url
        }).then((result) => {
            console.log({result})
            response.status(201).json({ msg: 'Data Berhasil Ditambah'})
        }).catch((err) => {
            response.status(500).json(err)
        }))
          .catch((error) => console.error(error));

    }

 }
