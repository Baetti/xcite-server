const express = require("express");
const newsItemModel = require("../Models/newsItems");

const router = express.Router();

// add news
router.post("/addnewsitem", async function (req, res) {
  try {
    const newitem = new newsItemModel(req.body);
    await newitem.save();
    res.send("News Added Successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

// get all news
router.get("/getallnewsitems", async function (req, res) {
  try {
    const data = await newsItemModel.find();
    res.send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

// get news item by user id for posted
router.post("/getnewsbyuserid", async function (req, res) {
  try {
    const data = await newsItemModel.find();
    const userPostedNewsItems = data.filter(
      (obj) => obj.postedBy.userid === req.body.userid
    );
    res.send(userPostedNewsItems);
  } catch (error) {
    res.status(400).send(error);
  }
});

// get news item by id
router.post("/getnewsitembyid", async function (req, res) {
  try {
    const data = await newsItemModel.findOne({ _id: req.body.newsid });
    res.send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

// edit news
router.post("/editnewsitem", async function (req, res) {
  try {
    await newsItemModel.findOneAndUpdate({ _id: req.body.newsid }, req.body);
    res.send("News Edited Successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

// delete news item
router.post("/deletenewsitem", async function (req, res) {
  try {
    await newsItemModel.findOneAndDelete({ _id: req.body.newsid });
    res.send("News Deleted Successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
