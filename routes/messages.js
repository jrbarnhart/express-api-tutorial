const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

// Example data
let messages = {
  1: {
    id: "1",
    text: "Hello World",
    userId: "1",
  },
  2: {
    id: "2",
    text: "By World",
    userId: "2",
  },
};

router.get("/", (req, res, next) => {
  return res.send(Object.values(messages));
});

router.get("/:messageId", (req, res, next) => {
  return res.send(messages[req.params.messageId]);
});

router.post("/", (req, res, next) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
  };

  messages[id] = message;
  return res.send(message);
});

router.delete("/:messageId", (req, res, next) => {
  const { [req.params.messageId]: message, ...otherMessages } = messages;

  messages = otherMessages;

  return res.send(message);
});

module.exports = router;
