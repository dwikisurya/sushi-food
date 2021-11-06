const categories = require('../models/categories')

module.exports = class CategoriesControllers{

    // Get
    static read( request, response){
        categories.find({}, (err, cat)=>{
            if(err){
                response.status(500).send(err)
            }
            response.status(200).json(cat)
        })
    }

    // Get One
    static readOne(request, response){
        const id = request.params.id
        categories.findById({_id:id}, (err,cat)=>{
            if(err){
                response.status(500).send(err)
            }
            response.status(200).json(cat)
        })
    }

    // Create One
    static create(request, response){
        const nameCategories = request.body.nameCategories
        categories.create({
            nameCategories: nameCategories
        }).then((result) => {
            response.status(201).json({ msg: 'Data Berhasil Ditambah' })
            console.log(result)
        }).catch((err) => {
            response.status(500).json(err)
            console.log(err)
        })
    }

    // Delete
    static delete(request, response){
        const id = request.params.id
        categories.findByIdAndDelete(id)
            .exec()
            .then((result) => {
                response.status(303).json({ msg: 'Data Berhasil Dihapus' })
            }).catch((err) => {
                response.status(500).json(err)
            })
    }


}