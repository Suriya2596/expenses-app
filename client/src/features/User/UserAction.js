import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseURL from "../BaseURL";


const token = localStorage.getItem("token") && JSON.parse(localStorage.getItem("token"))

const header = {"Authorization":token}

export const registerUser = createAsyncThunk("user/register",async(req)=>{
    const response = await axios.post(`${BaseURL}/user/register`,req.data)
    if(response.data.hasOwnProperty("errors")){
        alert(JSON.stringify(response.data.message))
    }
    if(response.data.hasOwnProperty("keyValue")){
        alert(`${JSON.stringify(response.data.keyValue)} is already there`)
    }
    if(response.data.hasOwnProperty("_id")){
        req.resolve()
    }
    if(response.data.hasOwnProperty("_id")){
        return response.data
    }
})

export const loginUser = createAsyncThunk("user/login",async(data)=>{
    const response = await axios.post(`${BaseURL}/user/login`,data)
    return response.data
})

export const accountUser = createAsyncThunk("user/account", async ()=>{
    const response = await axios.get(`${BaseURL}/user`,{headers:header})
    return response.data
})

export const updateUser = createAsyncThunk("user/update", async (data)=>{
    const response = await axios.put(`${BaseURL}/user`,{headers:header},data)
    return response.data
})