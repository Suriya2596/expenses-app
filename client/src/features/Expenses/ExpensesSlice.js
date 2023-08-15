import {createSlice} from "@reduxjs/toolkit"
import { expensesCreate, expensesList, expensesUpdate, expesnestLogout, totalBudgetExpesnse } from "./ExpensesAction"


const expensesSlice = createSlice({
    name:"expenses",
    initialState:{
        loading:false,
        error:null,
        expensesdata:[],
        totalExpesnse:{}
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
        // update 
        .addCase(expensesUpdate.pending,(state)=>{
            state.loading = true
        })
        .addCase(expensesUpdate.fulfilled,(state,action)=>{
            state.loading = false
            state.expensesdata = state.expensesdata.map((exp)=>{
                if(exp._id===action.payload._id){
                    return {...exp,...action.payload }
                }else{
                    return {...exp}
                }
            })
        })
        .addCase(expensesUpdate.rejected,(state,action)=>{
            state.loading = false
            state.expensesdata = action.payload
        })
        // totalBudgetExpesnse
        .addCase(totalBudgetExpesnse.pending,(state)=>{
            state.loading = true
        })
        .addCase(totalBudgetExpesnse.fulfilled,(state,action)=>{
            state.loading =false
            state.totalExpesnse = action.payload
            state.error = null
        })
        .addCase(totalBudgetExpesnse.rejected,(state,action)=>{
            state.loading =false
            state.error = action.payload
        })
        .addCase(expesnestLogout,(state)=>{
            state.expensesdata = []
            state.error = null
            state.loading = false
            state.totalExpesnse = {}
        })
    }
})

export default expensesSlice.reducer