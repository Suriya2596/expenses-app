import { createAsyncThunk } from '@reduxjs/toolkit'
import BaseURL from '../BaseURL'
import axios from 'axios'

export const categoryCreate  = createAsyncThunk("category/create", async (req)=>{
    try{
        const response = await axios.post(`${BaseURL}/category`,req.data,{
            headers:{
                "Authorization":JSON.parse(localStorage.getItem("token"))
            }
        })
        const data = response.data
        if(data.hasOwnProperty("_id")){
            req.resolve()
        }
        if(data.hasOwnProperty("_id")){
            return data
        }
        // errors
        if (response.data.hasOwnProperty("errors")) {
            alert(response.data.message)
        }
        if (response.data.hasOwnProperty("keyValue")) {
            alert(`User is already created budget`)
        }
        if (response.data && response.data.errors === "Invalid Token") {
            localStorage.removeItem("token")
        }
    }catch(err){
        alert(`${err.message}`)
    }

})