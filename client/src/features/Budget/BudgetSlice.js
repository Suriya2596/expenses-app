import { createSlice } from "@reduxjs/toolkit";
import { budgetCreate, budgetList, budgetLogout } from "./BudgetAction";

const budgetSlice = createSlice({
    name:"budget",
    initialState:{
        loading:false,
        budgetData:{},
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        // budgetCreate
        .addCase(budgetCreate.pending,(state)=>{
            state.loading = true
        })
        .addCase(budgetCreate.fulfilled,(state,action)=>{
            state.loading = false
            state.error = null
            state.budgetData = action.payload
        })
        .addCase(budgetCreate.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })
        // budgetList
        .addCase(budgetList.pending,(state)=>{
            state.loading = true
        })
        .addCase(budgetList.fulfilled,(state,action)=>{
            state.loading = false
            state.error = null
            state.budgetData = action.payload
        })
        .addCase(budgetList.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })
        .addCase(budgetLogout, (state) => {
            state.loading = false
            state.error = null
            state.budgetData = {};
        });  
    }
})

export default budgetSlice.reducer