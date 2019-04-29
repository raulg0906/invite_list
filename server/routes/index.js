var express = require("express");
var router = express.Router();

let going = [];
let notgoing = [];

router.get("/", (req, res, next) => {
  res.json({
    goingCount: going.length,
    notgoingCount: notgoing.length
  });
});

router.get("/going", (req, res, next) => {
  res.json(going);
});

router.get("/notgoing", (req, res, next) => {
  res.json(notgoing);
});

router.post("/going", (req, res, next) => {
  going.push(req.body);
  res.json({
    message: "added to going"
  });
});

router.post("/notgoing", (req, res, next) => {
  notgoing.push(req.body);
  res.json({
    message: "added to notgoing"
  });
});

module.exports = router;
