const express = require("express");
const { connectDB } = require("./connect");
const urlRoute = require('./routes/url-routes')

const app = express()
const PORT = 3000

connectDB("mongodb://127.0.0.1:27017/short-url")

app.use(express.json())

app.use('/url',urlRoute)

app.listen(3000, ()=> { console.log(`Server started at port ${PORT}`);})
