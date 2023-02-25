const express = require('express');
const { BagModel } = require('../Models/Bag.model');

const bagRouter = express.Router();



bagRouter.get("/", async (req, res) => {
    try{
        let data = await BagModel.find()
        res.send(data)
    }catch(err){
        res.send(err.message)
        console.log('err:', err)
    }
})
bagRouter.post("/", async (req, res) => {
    let payload = req.body
    try{
        let data = new BagModel(payload)
        await data.save();
        res.send("Data Sent successfully!")
    }catch(err){
        res.send(err.message)
        console.log('err:', err)
    }
})
bagRouter.patch("/:id", async (req, res) => {
    let ID = req.params.id
    let payload = req.body
    try{
        let data = await BagModel.findByIdAndUpdate({_id:ID},payload)
        res.send("Data Updated successfully!")
    }catch(err){
        res.send(err.message)
        console.log('err:', err)
    }
})
bagRouter.delete("/:id", async (req, res) => {
    let ID = req.params.id
    try{
        let data = await BagModel.findByIdAndDelete({_id:ID})
        res.send("Data Deleted successfully!")
    }catch(err){
        res.send(err.message)
        console.log('err:', err)
    }
})


module.exports = {
    bagRouter
}
