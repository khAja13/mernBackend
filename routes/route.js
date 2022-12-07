const express = require("express");
const router = new express.Router();
const path = require('path');
require('../db/conn')

const Model = require('../db/model')

router.get("/", (req, res) => {
    console.log("done")
    res.sendFile(path.join(__dirname + "/info.html"))
})

router.get("/user", async (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
    try{
        const result = await Model.find();
        res.json(result)
        // console.log("Sending u all the data from the server to client since it is not having any parameters i am sending u all")
    }
    catch(err){

        res.send(err.message)
    }
})

router.get("/user/:id", async (req, res) => {
    const id = req.params.id;
    try{
        const result = await Model.findById(id);
        res.send(result)
        // res.send(`Sending u the data from the database of id ${id}`)
    } 
    catch(err){
        res.send("Error occured was " +  err.message)
    }
})

router.post("/user", (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
    const model = new Model(req.body);

    model.save().then(()=>{
        console.log("The data that was saved in the database is ", req.body)
        res.send("the post data u have done to me is saved into the database")
        return;
    }).catch((err) => {
        res.send("Cant able to save your data in the database :( " + err.message)
    })
    
})

router.patch("/user/:id", async(req, res) => {
    console.log("Value to be updated is ", req.body)
    const id = req.params.id;
    try{
        const updated = await Model.findByIdAndUpdate(id, req.body, {
            new : true,
        })
        res.send("Updated data is " + updated)
    }
    catch(err){
        console.log("Error in updation " +err.message)
        res.send("Error in updation " + err.message)
    }
})

router.delete('/user/:id', async (req, res) => {
    const id = req.params.id;

    try {
        await Model.findByIdAndDelete(id);
        res.send("Deleted")
        console.log("Data was deleted")
    }
    catch(err){
        res.send("Error in deletion " + err.message)
    }
})

module.exports = router