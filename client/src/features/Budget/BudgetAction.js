import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import BaseURL from "../BaseURL"

const token = localStorage.getItem("token") && JSON.parse(localStorage.getItem("token"))
const tokenHeader = {"Authorization":token}

export const listBudget = createAsyncThunk("list/budget",async()=>{
    try{
        const response = await axios.get(`${BaseURL}/budget`,{headers:tokenHeader})
        return response.data
    }catch(error){
        window.alert(error.response.data.message)
    }
})

export const createBudget = createAsyncThunk("create/budget",async(data)=>{
    try{
        const response = await axios.post(`${BaseURL}/budget`,data,{headers:tokenHeader})
        return response.data
    }catch(error){
        window.alert(error.response.data.message)
    }
})

export const updateBudget = createAsyncThunk("update/budget",async(data,id)=>{
    try{
        const response = await axios.put(`${BaseURL}/budget/${id}`,data,{headers:tokenHeader})
        return response.data
    }catch(error){
        window.alert(error.response.data.message)
    }
})

export const destroyBudget = createAsyncThunk("delete/budget",async(id)=>{
    try{
        const response = await axios.delete(`${BaseURL}/budget/${id}`,{headers:tokenHeader})
        return response.data
    }catch(error){
        window.alert(error.response.data.message)
    }
})