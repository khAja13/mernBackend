const mongoose = require("mongoose")

require('dotenv').config();

mongoose.set('strictQuery', false);

// const DB = process.env.DB_URL
const DB = 'mongodb://localhost:27017/'

mongoose.connect(DB).then(()=>{
    console.log("Connection was successfull :)")
}).catch((err) => {
    console.log(err.message)
})

