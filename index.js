const express = require("express");
const router = require("./routes/route");
const app = express();
const ownRouter = require("./routes/route")
const cors = require('cors')
app.use(cors)
require('dotenv').config()

app.use(express.json())
app.use("/api", ownRouter)


if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
}

const PORT = process.env.PORT || 3001;
app.listen(PORT)