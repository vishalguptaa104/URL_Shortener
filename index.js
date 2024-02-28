const express = require("express");
const { connectDB } = require("./connect");
const urlRoute = require('./routes/url-routes')
const staticRouter = require('./routes/static-router')
const URL = require('./models/urlSchema-model');
const { handleRedirectURL } = require("./controllers/url-controller");
const path = require("path")

const app = express()
const PORT = 3000

connectDB("mongodb://127.0.0.1:27017/short-url")

app.set('view engine', "ejs")
app.set("views", path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/url", urlRoute)

app.use("/", staticRouter)


app.listen(3000, ()=> { console.log(`Server started at port ${PORT}`);})
