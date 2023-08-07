const Expenses = require("../models/expensesModel")
const expensesController = {}

expensesController.create = (req,res)=>{
    const body = req.body
    const expenses = new Expenses(body)
    expenses.user = req.user._id
    expenses.save()
        .then((responseData)=>{
            res.json(responseData)
        })
        .catch((err)=>{
            res.json(err)
        })
}

expensesController.list = (req,res)=>{
    Expenses.find({user:req.user._id})
        .then((responseData)=>{
            res.json(responseData)
        })
        .catch((err)=>{
            res.json(err)
        })
}

expensesController.listUndelete = (req,res)=>{
    Expenses.find({user:req.user._id,isDeleted:false})
        .then((responseData)=>{
            res.json(responseData)
        })
        .catch((err)=>{
            res.json(err)
        })
}

expensesController.listDelete = (req,res)=>{
    Expenses.find({user:req.user._id,isDeleted:true})
        .then((responseData)=>{
            res.json(responseData)
        })
        .catch((err)=>{
            res.json(err)
        })
}

expensesController.show = (req,res)=>{
    const id = req.params.id
    Expenses.findOne({_id:id,user:req.user._id})
        .then((responseData)=>{
            res.json(responseData)
        })
        .catch((err)=>{
            res.json(err)
        })
}

expensesController.update = (req,res)=>{
    const id = req.params.id
    const body = req.body
    Expenses.findOneAndUpdate({_id:id,user:req.user._id},body,{runValidators:true,new:true})
        .then((responseData)=>{
            res.json(responseData)
        })
        .catch((err)=>{
            res.json(err)
        })
}

expensesController.destroy = (req,res)=>{
    const id = req.params.id
    Expenses.findOneAndDelete({_id:id,user:req.user._id})
        .then((responseData)=>{
            res.json(responseData)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports = expensesController