import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseURL from "../BaseURL";


export const registerUser = createAsyncThunk("user/register", async (req) => {
    try {
        const response = await axios.post(`${BaseURL}/user/register`, req.data)
        // console.log(response.data)
        if (response.data.hasOwnProperty("errors")) {
            alert(JSON.stringify(response.data.message))
        }
        if (response.data.hasOwnProperty("keyValue")) {
            alert(`${JSON.stringify(response.data.keyValue)} is already there`)
        }
        if (response.data.hasOwnProperty("_id")) {
            req.resolve(response.data._id)
        }
        if (response.data.hasOwnProperty("_id")) {
            return response.data
        }
    } catch (error) {
        throw new Error(error.response.data.message)
    }
})

export const loginUser = createAsyncThunk("user/login", async (res) => {
    try {
        const response = await axios.post(`${BaseURL}/user/login`, res.data)
        if (response.data.hasOwnProperty("token")) {
            res.resolve()
            localStorage.setItem("token", JSON.stringify(response.data.token))
        }
        if (response.data.hasOwnProperty("errors")) {
            alert(response.data.message)
        }
        if (response.data.hasOwnProperty("token")) {
            return response.data
        }
    } catch (error) {
        throw new Error(error.response.data.message)
    }
})

export const accountUser = createAsyncThunk("user/account", async () => {
    try {
        const response = await axios.get(`${BaseURL}/user/account`, { headers: { "Authorization": JSON.parse(localStorage.getItem("token")) } })
        if (Object.keys(response.data).length > 0 && response.data.errors === "Invalid Token" && response.data == null) {
            localStorage.removeItem("token")
        }
        if (response.data.hasOwnProperty("_id")) {
            return response.data
        }
    } catch (error) {
        throw new Error(error.response.data.message)
    }
})

export const updateUser = createAsyncThunk("user/update", async (resData) => {
    try {
        const response = await axios.put("http://localhost:3400/api/user/update", resData.data,
            { headers: { "Authorization": JSON.parse(localStorage.getItem("token")) } }
        )
        if (response.data.hasOwnProperty("_id")) {
            resData.resolve()
        }
        if (response.data.hasOwnProperty("_id")) {
            return response.data
        }
        if (response.data.hasOwnProperty("errors")) {
            alert(response.data.message)
        }
        if (response.data && response.data.errors === "Invalid Token") {
            localStorage.removeItem("token")
        }
    } catch (error) {
        throw new Error(error.response.data.message)
    }
})

// UserAction.js
export const userLogout = () => {
    return { type: "user/logout" };
};
