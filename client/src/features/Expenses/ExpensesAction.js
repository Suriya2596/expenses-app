import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseURL from "../BaseURL";

export const expensesCreate = createAsyncThunk("expenses/create",async(req)=>{
    try{
        const response = await axios.post(`${BaseURL}/expenses`, req.data, {
            headers: {
                "Authorization": JSON.parse(localStorage.getItem("token"))
            }
        })
        // console.log(response.data)
        const data = response.data
        if (data.hasOwnProperty("_id")) {
            req.resolve()
        }
        if (data.hasOwnProperty("_id")) {
            return data
        }
        // errors
        if (response.data.hasOwnProperty("errors")) {
            alert(response.data.message)
        }
        if (response.data.hasOwnProperty("keyValue")) {
            alert(`already created budget`)
        }
        if (response.data.errors === "Invalid Token" || !response.data ) {
            localStorage.removeItem("token")
        }
    }catch(err){
        alert(`${err.message}`)
    }
})

export const expensesList = createAsyncThunk("expenses/list",async()=>{
    try{
        const response = await axios.get(`${BaseURL}/expenses`, {
            headers: {
                "Authorization": JSON.parse(localStorage.getItem("token"))
            }
        })
        // console.log(response.data)
        const data = response.data
        if (data) {
            return data
        }
        // errors
        if (response.data.hasOwnProperty("errors")) {
            alert(response.data.message)
        }
        if (response.data.hasOwnProperty("keyValue")) {
            alert(`already created`)
        }
        if (response.data.errors === "Invalid Token" || !response.data ) {
            localStorage.removeItem("token")
        }
    }catch(err){
        alert(`${err.message}`)
    }
})

export const totalBudgetExpesnse = createAsyncThunk("expenses/totalBudgetExpesnse",async()=>{
    try{
        const response = await axios.get(`${BaseURL}/expenses/totalExpesnse`, {
            headers: {
                "Authorization": JSON.parse(localStorage.getItem("token"))
            }
        })
        // console.log(response.data)
        const data = response.data
        if (data) {
            return data
        }
        // errors
        if (response.data.hasOwnProperty("errors")) {
            alert(response.data.message)
        }
        if (response.data.hasOwnProperty("keyValue")) {
            alert(`already created`)
        }
        if (response.data.errors === "Invalid Token" || !response.data ) {
            localStorage.removeItem("token")
        }
    }catch(err){
        alert(`${err.message}`)
    }
})