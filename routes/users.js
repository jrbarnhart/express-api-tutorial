const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  return res.send("GET HTTP method on user resource");
});

router.post("/", (req, res, next) => {
  return res.send("POST HTTP method on user resource");
});

router.put("/:userId", (req, res, next) => {
  return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
});

router.delete("/userId", (req, res, next) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
});

module.exports = router;
