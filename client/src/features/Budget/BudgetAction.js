import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import BaseURL from "../BaseURL"

export const budgetCreate = createAsyncThunk("budget/create", async () => {
    try {
        const response = await axios.post(`${BaseURL}/budget`,{},
            { headers: { "Authorization": JSON.parse(localStorage.getItem("token")) } }
        )
        console.log(response)
        if (response.data.hasOwnProperty("errors")) {
            alert(response.data.message)
        }
        if (response.data.hasOwnProperty("_id")) {
            return response.data
        }
    } catch (error) {
        console.log(error)
        throw new Error(error.response.data.message)
    }
})