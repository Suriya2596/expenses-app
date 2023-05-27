const express = require("express")
const routes = express.Router()

// controller
const userContoller = require("../app/controllers/userController")
const {authentication,authorization} = require("../app/middlewares/authentication")

// routes
// user routes
routes.post("/api/user/register",userContoller.register)
routes.post("/api/user/login",userContoller.login)
routes.post("/api/user/account",authentication,userContoller.account)
routes.put("/api/user/update",authentication,userContoller.update)


module.exports = routes