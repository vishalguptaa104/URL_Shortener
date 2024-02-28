const URL = require('./models/urlSchema-model');
const { handleRedirectURL } = require("./controllers/url-controller");
const path = require("path")
const express = require("express");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./connect");
const { restrictToLoggedinUserOnly, checkAuth } = require("./middlewares/auth");


const urlRoute = require("./routes/url-routes");
const staticRoute = require("./routes/static-router");
const userRoute = require("./routes/user-router");

const app = express()
const PORT = 3000

connectDB("mongodb://127.0.0.1:27017/short-url")

app.set('view engine', "ejs")
app.set("views", path.resolve("./views"))


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/user", userRoute);
app.use("/", checkAuth, staticRoute);


app.listen(3000, ()=> { console.log(`Server started at port ${PORT}`);})
