import { createSlice } from "@reduxjs/toolkit";
import { listUserData, updateUserData } from "./UserAction";


const userSlice = createSlice({
    name:"User",
    initialState:{
        user:{},
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(listUserData.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(listUserData.fulfilled,(state,action)=>{
            state.loading = false,
            state.user = action.payload
        })
        .addCase(listUserData.rejected,(state,action)=>{
            state.error = action.error.message
        })
        // update user
        .addCase(updateUserData.loading,(state,action)=>{
            state.loading = true
        })
        .addCase(updateUserData.fulfilled,(state,action)=>{
            state.loading  = false
            state.user = action.payload
        })
        .addCase(updateUserData.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer