const mongoose = require("mongoose")
const Schema = mongoose.Schema

const budgetSchema = new Schema({
    total:{
        type:String,
        required:true,
        default:0,
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        unique:true,
    }
},{timestamps:true})

const Budget = mongoose.model("Budget",budgetSchema)

module.exports = Budget