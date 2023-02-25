const express = require('express');
const cors = require('cors');
const { connections } = require('./configs/db'); 
const { menRouter } = require('./Routes/Men.routes');
const { womenRouter } = require('./Routes/Women.routes');
const { bagRouter } = require('./Routes/Bag.routes');
require('dotenv').config()

const app = express();
app.use(express.json());


app.use(cors({
    origin: "*"
}))
app.use("/men", menRouter)
app.use("/women", womenRouter)
app.use("/bag", bagRouter)


app.get("/", (req, res) => {
    res.send("Welcome to ASOS database");
})

app.listen(8080, async()=>{
    try {
        await connections;
        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
    }
    console.log(`listening on port 8080`);
})