const { nanoid } = require('nanoid');
const URL = require('../models/urlSchema-model')

const handleGenerateNewURL = async (req,res) => {
    const shortID = nanoid(8);
    const body = req.body;
    if(!body.url) return res.status(400).json({ error:"url is required." })
    await URL.create({
        shortId : shortID,
        redirectURL : body.url,
        visitHistory :[],
    })
    return res.render("homePage-view", {
        id: shortID
    })
}

const handleRedirectURL = async (req,res) => {
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate({
        shortId,
    },
    {
        $push :{
            visitHistory : {timestamp : Date.now()},
        },
    }
    );
    
    res.redirect(entry.redirectURL)
}

const handleGetAnalytics = async (req,res) => {
    const shortId = req.params.shortId
    const result = await URL.findOne({
        shortId
    })
    return res.json({
        totalClick :result.visitHistory.length,
        analytics: result.visitHistory
    })
}

module.exports = {
    handleGenerateNewURL,
    handleRedirectURL,
    handleGetAnalytics
}