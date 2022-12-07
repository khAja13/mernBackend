const express = require("express");
const router = require("./routes/route");
const app = express();
const ownRouter = require("./routes/route")

const cors = require('cors')

require('dotenv').config()

app.use(express.json())
app.use("/api", ownRouter)
app.use(cors)

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });
  
// if(process.env.NODE_ENV == "production"){
//     app.use(express.static("client/build"));
// }

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Server has started listening");
})