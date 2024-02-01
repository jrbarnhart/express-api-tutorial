const express = require("express");
const router = express.Router();

// Example data
const users = {
  1: {
    id: "1",
    username: "Robin Wieruch",
  },
  2: {
    id: "2",
    username: "Dave Davids",
  },
};

router.get("/", (req, res, next) => {
  return res.send(Object.values(users));
});

router.post("/", (req, res, next) => {
  return res.send("POST HTTP method on user resource");
});

router.get("/:userId", (req, res, next) => {
  return res.send(users[req.params.userId]);
});

router.put("/:userId", (req, res, next) => {
  return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
});

router.delete("/userId", (req, res, next) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
});

module.exports = router;
