const mongoose = require("mongoose")

require('dotenv').config();

mongoose.set('strictQuery', false);

// const DB = process.env.DB_URL
const email = encodeURIComponent("khajashaik")
const password = encodeURIComponent("khajashaik")
const DB = `mongodb+srv://${email}:${password}@cluster0.vvnga.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(DB).then(()=>{
    console.log("Connection was successfull :)")
}).catch((err) => {
    console.log(err.message)
})

