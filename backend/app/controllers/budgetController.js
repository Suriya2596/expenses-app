const Budget = require("../models/budgetModel")
const budgetController = {}

budgetController.create = (req,res)=>{
    const body = req.body
    const newBuget = new Budget(body)
    newBuget.user = body.user
    newBuget.save()
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{
            res.json(err)
        })
}

budgetController.list = (req,res)=>{
    Budget.findOne({user:req.user._id})
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{
            res.json(err)
        })
}

budgetController.show = (req,res)=>{
    Budget.findOne({user:req.user._id})
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{
            res.json(err)
        })
}

budgetController.update = (req,res)=>{
    const body = req.body
    Budget.findOneAndUpdate({user:req.user._id},body,{new:true,runValidators:true})
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{
            res.json(err)
        })
}

budgetController.destory = (req,res)=>{
    Budget.findOneAndDelete({user:req.user._id})
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports = budgetController