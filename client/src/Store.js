import { configureStore } from "@reduxjs/toolkit"
import UserSlice from "./features/User/UserSlice"
import BudgetSlice from "./features/Budget/BudgetSlice"
import CategorySlice from "./features/category/CategorySlice"
import ExpensesSlice from "./features/Expenses/ExpensesSlice"

const store = configureStore({
    reducer:{
        user:UserSlice,
        budget:BudgetSlice,
        category:CategorySlice,
        expenses:ExpensesSlice,
    }
})

export default store