import { createSlice } from "@reduxjs/toolkit";
import StatusCode from "../../utlies/StatusCode";
import { listBudget } from "./BudgetAction";

const budgetSlice = createSlice({
    name:"budget",
    initialState:{
        error:null,
        budget:[],
        state:StatusCode.IDEL
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(listBudget.pending,)
    }
})