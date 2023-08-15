const Budget = require("../models/budgetModel")
const Category = require("../models/categoryModel")
const Expenses = require("../models/expensesModel")
const expensesController = {}

expensesController.create = (req, res) => {
    const body = req.body
    const expenses = new Expenses(body)
    expenses.user = req.user._id
    expenses.save()
        .then((responseData) => {
            res.json(responseData)
        })
        .catch((err) => {
            res.json(err)
        })
}

expensesController.list = (req, res) => {
    Expenses.find({ user: req.user._id })
        .then((responseData) => {
            res.json(responseData)
        })
        .catch((err) => {
            res.json(err)
        })
}

expensesController.listUndelete = (req, res) => {
    Expenses.find({ user: req.user._id, isDeleted: false })
        .then((responseData) => {
            res.json(responseData)
        })
        .catch((err) => {
            res.json(err)
        })
}

expensesController.listDelete = (req, res) => {
    Expenses.find({ user: req.user._id, isDeleted: true })
        .then((responseData) => {
            res.json(responseData)
        })
        .catch((err) => {
            res.json(err)
        })
}

expensesController.show = (req, res) => {
    const id = req.params.id
    Expenses.findOne({ _id: id, user: req.user._id })
        .then((responseData) => {
            res.json(responseData)
        })
        .catch((err) => {
            res.json(err)
        })
}

expensesController.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Expenses.findOneAndUpdate({ _id: id, user: req.user._id }, body, { runValidators: true, new: true })
        .then((responseData) => {
            res.json(responseData)
        })
        .catch((err) => {
            res.json(err)
        })
}

expensesController.destroy = (req, res) => {
    const id = req.params.id
    Expenses.findOneAndDelete({ _id: id, user: req.user._id })
        .then((responseData) => {
            res.json(responseData)
        })
        .catch((err) => {
            res.json(err)
        })
}

expensesController.totalExpesnse = (req, res) => {
    Expenses.find({ isDeleted: false, user: req.user._id })
        .then((expenses) => {
            const totalExpense = expenses.reduce((pv, cv) => {
                return pv + parseInt(cv.amount)
            }, 0)
            Budget.findOne({ user: req.user._id })
                .then((budget) => {
                    const totalBudget = parseInt(budget.total)
                    const totalPercentage = (totalExpense / totalBudget) * 100;
                    const remainingBudget = totalBudget - totalExpense
                    res.json({ totalPercentage, totalExpense, totalBudget ,remainingBudget})
                })
                .catch((err) => {
                    res.json(err)
                })
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = expensesController