const mongoose = require("mongoose")
const Schema = mongoose.Schema

const categorySchema = new Schema({
    title:{
        type:"String",
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    isDelete:{
        type:"Boolean",
        default:false,
        required:false
    }
},{timestamps:true})

const Category = mongoose.model("Category",categorySchema)

module.exports = Category