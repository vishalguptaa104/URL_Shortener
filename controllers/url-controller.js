const { nanoid } = require('nanoid');
const URL = require('../models/urlSchema-model')

const handleGenerateNewURL = async (req,res) => {
    console.log("hi");
    const shortID = nanoid(8);
    const body = req.body;
    if(!body.url) return res.status(400).json({ error:"url is required." })
    await URL.create({
        shortId : shortID,
        redirectURL : body.url,
        visitHistory :[],
    })
    return res.json({id:shortID})
}

module.exports = {
    handleGenerateNewURL,
}