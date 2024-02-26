const express = require('express')
const { handleGenerateNewURL } = require('../controllers/url-controller.js')
const router = express.Router()

router.post("/", handleGenerateNewURL)

module.exports = router;