import {createSlice} from "@reduxjs/toolkit"
import { expensesCreate, expensesList } from "./ExpensesAction"


const expensesSlice = createSlice({
    name:"expenses",
    initialState:{
        loading:false,
        error:null,
        expensesdata:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        // create
        .addCase(expensesCreate.pending,(state)=>{
            state.loading = true
        })
        .addCase(expensesCreate.fulfilled,(state,action)=>{
            state.loading =false
            state.expensesdata = [...state.expensesdata,action.payload]
            state.error = null
        })
        .addCase(expensesCreate.rejected,(state,action)=>{
            state.loading =false
            state.error = action.payload
        })
        // list
        .addCase(expensesList.pending,(state)=>{
            state.loading = true
        })
        .addCase(expensesList.fulfilled,(state,action)=>{
            state.loading =false
            state.expensesdata = action.payload
            state.error = null
        })
        .addCase(expensesList.rejected,(state,action)=>{
            state.loading =false
            state.error = action.payload
        })
    }
})

export default expensesSlice.reducer