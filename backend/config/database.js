const mongoose = require("mongoose")

const configureDB = ()=>{
    mongoose.connect(process.env.MONGO_URL)
        .then(()=>{
            console.log("conected to database")
        })
        .catch(()=>{
            console.log("not connected to database")
        })
}

module.exports = configureDB