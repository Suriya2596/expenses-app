const express = require("express")
const routes = express.Router()

// controller
const userContoller = require("../app/controllers/userController")
const {authentication,authorization} = require("../app/middlewares/authentication")
const categoryController = require("../app/controllers/categoryController")

// routes
// user routes
routes.post("/api/user/register",userContoller.register)
routes.post("/api/user/login",userContoller.login)
routes.post("/api/user/account",authentication,userContoller.account)
routes.put("/api/user/update",authentication,userContoller.update)

// category routes
routes.post("/api/user/category",authentication,categoryController.create)
routes.get("/api/user/category",authentication,categoryController.list)
routes.get("/api/user/category/:id",authentication,categoryController.show)
routes.post("/api/user/category/id",authentication,categoryController.update)
routes.post("/api/user/category/id",authentication,authorization,categoryController.destroy)

module.exports = routes