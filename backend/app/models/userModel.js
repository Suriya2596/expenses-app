const mongoose = require("mongoose")
const { Schema } = mongoose

const isEmail = require("validator/lib/isEmail")
const isNumeric = require("validator/lib/isNumeric")

const userSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        unique:true,
        validate:{
            validator:function(value){
                return isEmail(value)
            },
            message:function(){
                return "Enter Validate Email Address"
            }
        },
        required:[true,"Email address is required"]
    },
    mobile:{
        type:String,
        unique:true,
        minlength:10,
        maxlength:10,
        validate:{
            validator:function(value){
                return isNumeric(value)
            },
            message:function(){
                return "Enter validate mobile number"
            }
        },
        required:[true,"Mobile number is required"]
    },
    password:{
        type:String,
        maxlength:128,
        minlength:8,
        required:[true,"Password is invalidate"],
    },
    image:{
        type:String,
        default:""
    },
    occupation:{
        type:String,
        default:""
    },
    role:{
        type:String,
        default:"user"
    },
},{timestamps:true})

const User = mongoose.model("User",userSchema)

module.exports = User