const express = require('express')
const app = express()
const path = require('path')
const test=require('dotenv').config();

const connectDB= require("./mongodb/connect")


const port =3000
app.get('/', (req, res) => {
    res.send("Hello World from home page")
})

//middleware to set router
app.use('/api/products',require(path.join(__dirname,'routes/products.js')))

connectDB(process.env.MONGODBURI);

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
});
