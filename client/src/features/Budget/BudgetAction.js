import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import BaseURL from "../BaseURL"

const {token} = localStorage.getItem("token") && JSON.parse(localStorage.getItem("token"))
const tokenHeader = {"Authorization":token}

export const listBudget = createAsyncThunk("list/budget",async()=>{
    const response = await axios.get(`${BaseURL}/budget`,{headers:tokenHeader})
    return response.data
})

export const createBudget = createAsyncThunk("create/budget",async(data)=>{
    const response = await axios.post(`${BaseURL}/budget`,data,{headers:tokenHeader})
    return response.data
})

export const updateBudget = createAsyncThunk("update/budget",async(data,id)=>{
    const response = await axios.put(`${BaseURL}/budget/${id}`,data,{headers:tokenHeader})
    return response.data
})