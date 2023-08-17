const express = require("express")
const cors = require("cors")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 3400;

const configureDB = require("./config/database")
configureDB()

const routes = require("./config/routes")



app.use(cors())
app.use(express.json())
app.use(routes)



app.listen(port,()=>{
    console.log("Port is running on ",port)
})
