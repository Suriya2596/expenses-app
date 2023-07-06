import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import BaseURL from "../BaseURL"

export const listBudget = createAsyncThunk("list/budget",async()=>{
    try{
        const response = await axios.get(`${BaseURL}/budget`,{headers:{"Authorization":JSON.parse(localStorage.getItem("token"))}})
        return response.data
    }catch(error){
        window.alert(error.response.data.message)
    }
})

export const createBudget = createAsyncThunk("create/budget",async(data)=>{
    try{
        const response = await axios.post(`${BaseURL}/budget`,data,{headers:{"Authorization":JSON.parse(localStorage.getItem("token"))}})
        return response.data
    }catch(error){
        window.alert(error.response.data.message)
    }
})

export const updateBudget = createAsyncThunk("update/budget",async(data,id)=>{
    try{
        const response = await axios.put(`${BaseURL}/budget/${id}`,data,{headers:{"Authorization":JSON.parse(localStorage.getItem("token"))}})
        return response.data
    }catch(error){
        window.alert(error.response.data.message)
    }
})

export const destroyBudget = createAsyncThunk("delete/budget",async(id)=>{
    try{
        const response = await axios.delete(`${BaseURL}/budget/${id}`,{headers:{"Authorization":JSON.parse(localStorage.getItem("token"))}})
        return response.data
    }catch(error){
        window.alert(error.response.data.message)
    }
})