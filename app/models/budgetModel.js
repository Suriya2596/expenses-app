const mongoose = require("mongoose")
const Schema = mongoose.Schema

const budgetSchema = new Schema({
    total:{
        type:String,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

const Budget = mongoose.Model("Budget",budgetSchema)

module.exports = Budget