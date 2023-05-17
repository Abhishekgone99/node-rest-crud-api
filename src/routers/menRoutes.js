const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");

router.get("/", (req, res) => {
  res.send("Hello,This is Abhishek");
});

// we will handle post request
router.post("/mens", async (req, res) => {
  try {
    const mens100mRecord = new MensRanking(req.body);
    console.log(req.body);
    const insertMens = await mens100mRecord.save();
    res.status(201).send(insertMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

// we will handle get request
router.get("/mens", async (req, res) => {
  try {
    const getMens = await MensRanking.find({}).sort({ ranking: 1 });
    res.status(200).send(getMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

// getting a single record
router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getSingleMen = await MensRanking.findById(_id);
    res.status(200).send(getSingleMen);
  } catch (e) {
    res.status(400).send(e);
  }
});

// updating the data
router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getSingleMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(getSingleMen);
  } catch (e) {
    res.status(500).send(e);
  }
});

// deleting the data
router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getSingleMen = await MensRanking.findByIdAndDelete(_id);
    res.status(200).send(getSingleMen);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
