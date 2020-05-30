const express = require("express");
const router = express.Router();
const avengerModel = require("../model/avenger");
//route = /avenger/...

//avengers character api

//get all avenger avengers
router.get("/characters", (req, res) => {
  avengerModel
    .find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send("error with query marvel character by server");
    });
});

module.exports = router;
