const mongoose = require("mongoose")

const configureDB = ()=>{
    mongoose.connect("mongodb+srv://suriyajagan25:YgXfXlhZvdCNvVZc@cluster0.za5tist.mongodb.net/?retryWrites=true&w=majority")
        .then(()=>{
            console.log("conected to database")
        })
        .catch(()=>{
            console.log("not connected to database")
        })
}

module.exports = configureDB