const express = require("express");
const URL = require("../models/urlSchema-model");
const { restrictTo } = require("../middlewares/auth");

const router = express.Router();

router.get('/admin/urls', restrictTo(['ADMIN'])), async(req,res) => {
  const allurls = await URL.find({});
  return res.render("homePage-view", {
    urls: allurls,
  });
}

router.get("/", restrictTo(["NORMAL","ADMIN"]) ,async (req, res) => {
  const allurls = await URL.find({ createdBy: req.user._id });
  return res.render("homePage-view", {
    urls: allurls,
  });
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/login", (req, res) => {
  return res.render("login");
});

module.exports = router;