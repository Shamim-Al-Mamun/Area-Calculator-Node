const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/circle", (req, res) => {
  let reqPath = path.join(__dirname, "../");
  res.sendFile(reqPath + "/views/circle.html");
});
router.get("/square", (req, res) => {
  let reqPath = path.join(__dirname, "../");
  res.sendFile(reqPath + "/views/square.html");
});

router.get("/triangle", (req, res) => {
  let reqPath = path.join(__dirname, "../");
  res.sendFile(reqPath + "/views/triangle.html");
});
router.get("/rectangle", (req, res) => {
  let reqPath = path.join(__dirname, "../");
  res.sendFile(reqPath + "/views/rectangle.html");
});
module.exports = router;
