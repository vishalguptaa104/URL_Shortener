const express = require('express')
const { handleGenerateNewURL, handleRedirectURL, handleGetAnalytics } = require('../controllers/url-controller.js')
const router = express.Router()

router.post("/url", handleGenerateNewURL)

router.get("/:shortId" , handleRedirectURL)

router.get("/analytics/:shortId" , handleGetAnalytics)


module.exports = router;