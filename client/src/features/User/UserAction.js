import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BaseURL = "http://localhost:3400/api"

const {token} = localStorage.getItem("token") && JSON.parse(localStorage.getItem("token"))

export const listUserData = createAsyncThunk("user/listUserData", async ()=>{
    const response = await axios.get(`${BaseURL}/user`,Headers)
    return response.data
})

export const updateUserData = createAsyncThunk("user/updateUserData", async ()=>{
    const response = await axios.put(`${BaseURL}/user`,token)
    return response.data
})