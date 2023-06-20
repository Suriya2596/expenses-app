import {createSlice} from "@reduxjs/toolkit"
import { registerUser,loginUser,accountUser,updateUser } from "./UserAction"

const UserSlice = createSlice({
    name:"User",
    initialState:{
        laoding:false,
        error:null,
        user:{},
        register:{},
        login:{},
        token:""
    },
    reducers:{},
    extraReducers : (builder)=>{
        builder
        .addCase(registerUser.pending,(state)=>{
            state.laoding = true
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.laoding = false
            state.error = null
            state.register=action.payload
        })
        .addCase(registerUser.rejected,(state,action)=>{
            state.laoding = false
            state.error=action.payload
        })
        .addCase(loginUser.pending,(state)=>{
            state.laoding = true
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.login = action.payload
            state.laoding = false
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.error = action.payload
        })
    }
})


export default UserSlice.reducer