const mongoose = require("mongoose")
const mongoDBURL = process.env.MONGO_URL || 'mongodb+srv://suriyajagan25:YgXfXlhZvdCNvVZc@cluster0.za5tist.mongodb.net/?retryWrites=true&w=majority'
const configureDB = ()=>{
    mongoose.connect(mongoDBURL)
        .then(()=>{
            console.log("conected to database")
        })
        .catch(()=>{
            console.log("not connected to database")
        })
}

module.exports = configureDB
