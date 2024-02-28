const express = require("express")
const URL = require("../models/urlSchema-model")
const router = express.Router()

router.get('/', async (req,res) => {
    const allUrls = await URL.find({})
    return res.render("homePage-view",  {
        urls : allUrls
    })
})

module.exports = router