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

export const loginUser = createAsyncThunk("user/login",async(res)=>{
    const response = await axios.post(`${BaseURL}/user/login`,res.data)
    if(response.data.hasOwnProperty("token")){
        res.resolve()
        localStorage.setItem("token",JSON.stringify(response.data.token))
    }
    return response.data
})

export const accountUser = createAsyncThunk("user/account", async ()=>{
    try {
        const response = await axios.get(`${BaseURL}/user`,{headers:header})
        return response.data
    } catch (error) {
        throw new Error (error.response.data.message)
    }
})

export const updateUser = createAsyncThunk("user/update", async (data)=>{
    try{
        const response = await axios.get(`${BaseURL}/user`,{headers:header})
        return response.data
    }catch(error){
        throw new Error(error.response.data.message)
    }
})