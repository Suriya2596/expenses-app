import {createSlice} from "@reduxjs/toolkit"
import { registerUser,loginUser,accountUser,updateUser, userLogout } from "./UserAction"

const UserSlice = createSlice({
    name:"user",
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
        .addCase(registerUser.rejected,(state,action)=>{
            state.laoding = false
            state.error=action.payload
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.laoding = false
            state.error = null
            state.register=action.payload
        })

        .addCase(loginUser.pending,(state)=>{
            state.laoding = true
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.error = action.payload
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.login = action.payload
            state.laoding = false
            state.error = null
        })
        // account
        .addCase(accountUser.pending,(state)=>{
            state.laoding = true
        })
        .addCase(accountUser.rejected,(state,action)=>{
            state.error = action.payload
        })
        .addCase(accountUser.fulfilled,(state,action)=>{
            state.user = action.payload
            state.laoding = false
            state.error = null
        })
        // update
        .addCase(updateUser.pending,(state)=>{
            state.laoding = true
        })
        .addCase(updateUser.rejected,(state,action)=>{
            state.error = action.payload
            state.laoding = false
        })
        .addCase(updateUser.fulfilled,(state,action)=>{
            state.user = action.payload
            state.laoding = false
            state.error = null
        })
        .addCase(userLogout, (state) => {
            state.laoding = false
            state.error = null
            state.user = {}
            state.token = ""
        });    
    }
})


export default UserSlice.reducer