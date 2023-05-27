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
        .catch((err)=>{
            res.json(err)
        })
}

userContoller.login = (req,res)=>{
    const body = req.body
    User.findOne({email:body.email})
        .then((user)=>{
            if(user){
                bcryptjs.compare(body.password,user.password)
                    .then((match)=>{
                        if(match){
                            const tokenData = {
                                _id:user._id,
                                name: user.name,
                            } 
                            const token = jwt.sign(tokenData,process.env.JWT_SECRET,{expiresIn:"2d"})
                            res.json({token:`Bearer ${token}`})
                        }else{
                            res.json({errors: "Invalid email or password",message:"Invalidate email or password"})
                        }
                    })
                    .catch((err)=>{
                        res.json(err)
                    })
            }else{
                res.json({errors: "Invalid email or password",message:"Invalidate email or password"})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

userContoller.account = (res,req)=>{
    
}

module.exports = userContoller