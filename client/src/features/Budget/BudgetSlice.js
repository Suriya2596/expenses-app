import { createSlice } from "@reduxjs/toolkit";
import statusCode from "../../utlies/StatusCode";
import { createBudget, destroyBudget, listBudget, updateBudget } from "./BudgetAction";

const budgetSlice = createSlice({
    name:"budget",
    initialState:{
        error:null,
        budget:{},
        status:statusCode.IDEL
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(listBudget.pending,(state,action)=>{
            state.status=statusCode.LOADING
        })
        .addCase(listBudget.fulfilled,(state,action)=>{
            state.status = statusCode.IDEL
            state.budget = action.payload
        })
        .addCase(listBudget.rejected,(state,action)=>{
            state.status = statusCode.ERROR
            state.error = action.payload
        })
        .addCase(createBudget.pending,(state,action)=>{
            state.status = statusCode.LOADING
        })
        .addCase(createBudget.fulfilled,(state,action)=>{
            state.budget = action.payload
            state.status = statusCode.IDEL
        })
        .addCase(createBudget.rejected,(state,action)=>{
            state.error = action.payload
            state.status = statusCode.ERROR
        })
        .addCase(updateBudget.pending,(state)=>{
            state.status = statusCode.LOADING
        })
        .addCase(updateBudget.fulfilled,(state,action)=>{
            state.status = statusCode.IDEL
            return {...state.budget,...action.payload}
        })
        .addCase(updateBudget.rejected,(state,action)=>{
            state.status = statusCode.ERROR
            state.error = action.payload
        })
        .addCase(destroyBudget.pending,(state)=>{
            state.status = statusCode.LOADING
        })
        .addCase(destroyBudget.fulfilled,(state,action)=>{
            state.status = statusCode.IDEL
            return state.budget = {}
        })
        .addCase(destroyBudget.rejected,(state,action)=>{
            state.status = statusCode.ERROR
            state.error = action.payload
        })
    }
})

export default budgetSlice.reducer