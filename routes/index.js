const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  return res.send("Recieved a GET HTTP method");
});

router.post("/", (req, res, next) => {
  return res.send("Recieved a POST HTTP method");
});

router.put("/", (req, res, next) => {
  return res.send("Recieved a PUT HTTP method");
});

router.delete("/", (req, res, next) => {
  return res.send("Recieved a DELETE HTTP method");
});

module.exports = router;
