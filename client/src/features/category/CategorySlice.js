import { createSlice } from "@reduxjs/toolkit";
import { categoryCreate, categoryList, categoryUpdate } from "./CategoryAction";

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
        // create
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
        // listing
        .addCase(categoryList.pending,(state)=>{
            state.loading = true
        })
        .addCase(categoryList.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })
        .addCase(categoryList.fulfilled,(state,action)=>{
            state.loading = false
            state.error = null
            state.categoryData = action.payload
        })
        // update
        .addCase(categoryUpdate.pending,(state)=>{
            state.loading = true
        })
        .addCase(categoryUpdate.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })
        .addCase(categoryUpdate.fulfilled,(state,action)=>{
            state.loading = false
            state.error = null
            state.categoryData = state.categoryData.map((category)=>{
                if(category._id==action.payload._id){
                    return { ...category, ...action.payload }
                }else{
                    return {...category}
                }
            })
        })
    }
})

export default CategorySlice.reducer