const express = require("express")
const routes = express.Router()

// middleware
const {authentication,authorization} = require("../app/middlewares/authentication")

// controller
const userContoller = require("../app/controllers/userController")
const categoryController = require("../app/controllers/categoryController")
const budgetController = require("../app/controllers/budgetController")
const expensesController = require("../app/controllers/expensesController")

// routes
// user routes
routes.post("/api/user/register",userContoller.register)
routes.post("/api/user/login",userContoller.login)
routes.get("/api/user/account",authentication,userContoller.account)
routes.put("/api/user/update",authentication,userContoller.update)

// budget routes
routes.post("/api/budget",budgetController.create)
routes.get("/api/budget",authentication,budgetController.list)
routes.get("/api/budget/:id",authentication,budgetController.show)
routes.put("/api/budget/:id",authentication,budgetController.update)
routes.delete("/api/budget/:id",authentication,authorization,budgetController.destory)

// category routes
routes.post("/api/category",authentication,categoryController.create)
routes.get("/api/category",authentication,categoryController.list)
routes.get("/api/category/:id",authentication,categoryController.show)
routes.put("/api/category/:id",authentication,categoryController.update)
routes.delete("/api/category/:id",authentication,authorization,categoryController.destroy)

// expenses routes
routes.post("/api/expenses",authentication,expensesController.create)
routes.get("/api/expenses",authentication,expensesController.list)
routes.get("/api/expenses/:id",authentication,expensesController.show)
routes.put("/api/expenses/:id",authentication,expensesController.update)
routes.delete("/api/expenses/:id",authentication,authorization,expensesController.destroy)

module.exports = routes