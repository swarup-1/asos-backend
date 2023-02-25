const express = require('express');
const { WomenModel } = require('../Models/Women.model');
const { WomenBlackModel } = require('../Models/WomenBlack.model');
const { WomenBlueModel } = require('../Models/WomenBlue.model');
const { WomenPinkModel } = require('../Models/WomenPink.model');
const womenRouter = express.Router();

womenRouter.get("/", async (req, res) => {
    let {search,min,max} = req.query
    search=search || ""
    min=min || 1
    max=max || 100000
    try{
        let data = await WomenModel.find({$and:[{product:{$regex:search, $options: 'i'}},{price:{$gte:min}},{price:{$lte:max}}]})
        res.send(data)
    }catch(err){
        res.send(err.message)
        console.log('err:', err)
    }
})
womenRouter.get("/single/:id", async (req, res) => {
    const ID = req.params.id 
    try{
        let data = await WomenModel.find({_id:ID})
        res.send(data)
    }catch(err){
        res.send(err.message)
        console.log('err:', err)
    }
})
womenRouter.get("/brand", async (req, res) => {
    let {brand,min,max} = req.query
    brand=brand || ""
    min=min || 1
    max=max || 100000
    console.log(brand,min,max)
    try{
        let data = await WomenModel.find({$and:[{brand:{$regex:brand, $options: 'i'}},{price:{$gte:min}},{price:{$lte:max}}]})
        res.send(data)
    }catch(err){
        res.send(err.message)
        console.log('err:', err)
    }
})
womenRouter.get("/black/single/:id", async (req, res) => {
    const ID = req.params.id 
    try{
        let data = await WomenBlackModel.find({_id:ID})
        res.send(data)
    }catch(err){
        res.send(err.message)
        console.log('err:', err)
    }
})
womenRouter.get("/blue/single/:id", async (req, res) => {
    const ID = req.params.id 
    try{
        let data = await WomenBlueModel.find({_id:ID})
        res.send(data)
    }catch(err){
        res.send(err.message)
        console.log('err:', err)
    }
})
womenRouter.get("/pink/single/:id", async (req, res) => {
    const ID = req.params.id 
    try{
        let data = await WomenPinkModel.find({_id:ID})
        res.send(data)
    }catch(err){
        res.send(err.message)
        console.log('err:', err)
    }
})
womenRouter.get("/black", async (req, res) => {
    let {min,max} = req.query
    min=min || 1
    max=max || 100000
    try{
        let data = await WomenBlackModel.find({$and:[{price:{$gte:min}},{price:{$lte:max}}]})
        res.send(data)
    }catch(err){
        res.send(err.message)
        console.log('err:', err)
    }
})
womenRouter.get("/blue", async (req, res) => {
    let {min,max} = req.query
    min=min || 1
    max=max || 100000
    try{
        let data = await WomenBlueModel.find({$and:[{price:{$gte:min}},{price:{$lte:max}}]})
        res.send(data)
    }catch(err){
        res.send(err.message)
        console.log('err:', err)
    }
})
womenRouter.get("/pink", async (req, res) => {
    let {min,max} = req.query
    min=min || 1
    max=max || 100000
    try{
        let data = await WomenPinkModel.find({$and:[{price:{$gte:min}},{price:{$lte:max}}]})
        res.send(data)
    }catch(err){
        res.send(err.message)
        console.log('err:', err)
    }
})
// -------------------------------------------------------------------

womenRouter.post("/", async (req, res) => {
    let payload = req.body
    try{
        let data = new WomenModel(payload)
        await data.save();
        res.send("Data Sent successfully!")
    }catch(err){
        res.send(err.message)
        res.send(err.message)
        console.log('err:', err)
    }
})
womenRouter.patch("/:id", async (req, res) => {
    let ID = req.params.id
    let payload = req.body
    try{
        let data = await WomenModel.findByIdAndUpdate({_id:ID},payload)
        res.send("Data Updated successfully!")
    }catch(err){
        res.send(err.message)
        res.send(err.message)
        console.log('err:', err)
    }
})
womenRouter.delete("/:id", async (req, res) => {
    let ID = req.params.id
    try{
        let data = await WomenModel.findByIdAndDelete({_id:ID})
        res.send("Data Deleted successfully!")
    }catch(err){
        res.send(err.message)
        res.send(err.message)
        console.log('err:', err)
    }
})

module.exports = {
    womenRouter
}




