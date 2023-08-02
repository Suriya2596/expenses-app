import { configureStore } from "@reduxjs/toolkit"
import UserSlice from "./features/User/UserSlice"
import BudgetSlice from "./features/Budget/BudgetSlice"
import CategorySlice from "./features/category/CategorySlice"

const store = configureStore({
    reducer:{
        user:UserSlice,
        budget:BudgetSlice,
        category:CategorySlice,
    }
})

export default store