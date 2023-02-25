const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', true);


const connections = mongoose.connect("mongodb+srv://asos:asos@cluster0.1uolcfi.mongodb.net/asos?retryWrites=true&w=majority")

module.exports = {
    connections
}