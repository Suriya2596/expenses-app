const Category = require("../models/categoryModel")

const categoryController = {}

categoryController.create = (req,res)=>{
    const body = req.body
    const category  = new Category(body)
    category.user = req.user._id
    category.save()
        .then((categoryData)=>{
            res.json(categoryData)
        })
        .catch((err)=>{
            res.json(err)
        })
}


module.exports = categoryController