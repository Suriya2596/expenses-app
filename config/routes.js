const express = require("express")
const routes = express.Router()

// controller
const userContoller = require("../app/controllers/userController")


// routes
// user routes
routes.post("/api/user/register",userContoller.register)
routes.post("/api/user/login",userContoller.login)


module.exports = routes