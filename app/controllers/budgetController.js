const Budget = require("../models/budgetModel")
const budgetController = {}

budgetController.create = (req,res)=>{
    const body = req.body
    const newBuget = new Budget(body)
    newBuget.user = req.user._id
    newBuget.save()
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{
            res.json(err)
        })
}

budgetController.list = (req,res)=>{
    Budget.find({user:req.user._id})
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{
            res.json(err)
        })
}

budgetController.show = (req,res)=>{
    const id = req.params.id
    Budget.findOne({_id:id,user:req.user._id})
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{
            res.json(err)
        })
}

budgetController.update = (req,res)=>{
    const id = req.params.id
    const body = req.body
    Budget.findOneAndUpdate({_id:id,user:req.user._id},body,{new:true,runValidators:true})
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{
            res.json(err)
        })
}

budgetController.destory = (req,res)=>{
    const id = req.params.id
    Budget.findOneAndDelete({_id:id,user:req.user._id})
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports = budgetController