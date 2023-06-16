import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseURL from "../BaseURL";


const {token} = localStorage.getItem("token") && JSON.parse(localStorage.getItem("token"))

const header = {"Authorization":token}

export const listUserData = createAsyncThunk("user/listUserData", async ()=>{
    const response = await axios.get(`${BaseURL}/user`,{headers:header})
    return response.data
})

export const updateUserData = createAsyncThunk("user/updateUserData", async ()=>{
    const response = await axios.put(`${BaseURL}/user`,{headers:header})
    return response.data
})