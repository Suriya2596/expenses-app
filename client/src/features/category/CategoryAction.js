import { createAsyncThunk } from '@reduxjs/toolkit'
import BaseURL from '../BaseURL'
import axios from 'axios'

export const categoryCreate = createAsyncThunk("category/create", async (req) => {
    try {
        const response = await axios.post(`${BaseURL}/category`, req.data, {
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
            alert(`User is already created budget`)
        }
        if (response.data.errors === "Invalid Token" || !response.data ) {
            localStorage.removeItem("token")
        }
    } catch (err) {
        alert(`${err.message}`)
    }

})

export const categoryList = createAsyncThunk("category/list", async () => {
    try {
        const response = await axios.get(`${BaseURL}/category`, {
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
            alert(`User is already created budget`)
        }
        if (response.data.errors === "Invalid Token" || !response.data ) {
            localStorage.removeItem("token")
        }
    } catch (err) {
        alert(`${err.message}`)
    }
})


export const categoryUpdate = createAsyncThunk("category/update", async (req) => {
    try {
        const response = await axios.put(`${BaseURL}/category/${req._id}`,req.data, {
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
            alert(`User is already created budget`)
        }
        if (response.data.errors === "Invalid Token" || !response.data ) {
            localStorage.removeItem("token")
        }
    } catch (err) {
        alert(`${err.message}`)
    }
})