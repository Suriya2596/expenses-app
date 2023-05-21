const express = require("express")
const routes = express.Router()

// controller
const userContoller = require("../app/controllers/userController")

routes.post("/api/user/register",userContoller.register)

module.exports = routes