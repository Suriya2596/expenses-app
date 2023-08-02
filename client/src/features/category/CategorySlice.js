import { createSlice } from "@reduxjs/toolkit";
import { categoryCreate } from "./CategoryAction";

const CategorySlice = createSlice({
    name:"category",
    initialState:{
        loading:false,
        error:null,
        categoryData:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(categoryCreate.pending,(state)=>{
            state.loading = true
        })
        .addCase(categoryCreate.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })
        .addCase(categoryCreate.fulfilled,(state,action)=>{
            state.loading = false
            state.error = null
            state.categoryData = [...state.categoryData,action.payload]
        })
    }
})

export default CategorySlice.reducer