const User = require("../models/userModel")
const userContoller = {}
const jwt = require("jsonwebtoken")
const bcryptjs = require("bcryptjs")

userContoller.register = (req,res)=>{
    const body = req.body
    const user = new User(body)
    bcryptjs.genSalt(2)
        .then((salt)=>{
            bcryptjs.hash(user.password,salt)
                .then((encryptPWS)=>{
                    user.password = encryptPWS
                    user.save()
                        .then((userData)=>{
                            res.json(userData)
                        })
                        .catch((err)=>{
                            res.json(err)
                        })
                })
        })
}

module.exports = userContoller