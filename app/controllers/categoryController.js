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

categoryController.list = (req,res)=>{
    Category.find({user:req.user._id})
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{
            res.json(err)
        })
}

categoryController.show = (req,res)=>{
    const id = req.params.id
    Category.findOne({_id:id,user:req.user._id})
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{
            res.json(err)
        })
}

categoryController.update = (req,res)=>{
    const body = req.body
    const id = req.params.id
    Category.findOneAndUpdate({_id:id,user:req.user._id},body,{new:true,runValidators:true})
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{
            res.json(err)
        })
}

categoryController.destroy = (req,res)=>{
    const id = req.params.id
    Category.findByIdAndDelete({_id:id,user:req.user._id})
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports = categoryController