const mongoose = require("mongoose")
const Schema = mongoose.Schema

const expensesModel = new Schema({
    title:{
        type:String,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    amount:{
        type:Number,
        required:true,
    },
    expenseDate:{
        type:Date,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false,
        required:true
    }
},{timestamps:true})

const Expenses = mongoose.model("Expenses",expensesModel)

module.exports = Expenses