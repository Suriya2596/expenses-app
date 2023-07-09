import { configureStore } from "@reduxjs/toolkit"
import UserSlice from "./features/User/UserSlice"
import BudgetSlice from "./features/Budget/BudgetSlice"

const store = configureStore({
    reducer:{
        user:UserSlice,
        budget:BudgetSlice,
    }
})

export default store