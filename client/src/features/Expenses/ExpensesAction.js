import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const expensesCreate = createAsyncThunk("expenses/create",async(req)=>{
    try{
        const response = await axios.post(`http://localhost:3400/api/expenses`, req.data, {
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
        if (!data && data.errors === "Invalid Token") {
            localStorage.removeItem("token")
        }
    }catch(err){
        alert(`${err.message}`)
    }
})

export const expensesList = createAsyncThunk("expenses/list",async()=>{
    try{
        const response = await axios.get(`http://localhost:3400/api/expenses`, {
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
        if (!data && data.errors === "Invalid Token") {
            localStorage.removeItem("token")
        }
    }catch(err){
        alert(`${err.message}`)
    }
})