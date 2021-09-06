const express = require("express");
const modelSch = require("./ModelSchema");
const router = express.Router();

router.get("/user", async (req, res) => {
  const AllData = await modelSch.find();
  res.status(200).json(AllData);
});

router.post("/api/users", async (req, res) => {
  const SendingData = await modelSch.create({
    name: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    res.status(201).json({
      message: "Succefull 💻",
      data: SendingData,
    });
  } catch (error) {
    res.status(404).json({
      message: "getting all data failed 😣",
      data: SendingData,
    });
  }
});

module.exports = router;
