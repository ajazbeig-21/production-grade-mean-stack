const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const authMiddleware = require("../middleware/auth");

// List all users (Protected route)
router.get("/", authMiddleware, async (req, res) => {
  try {
    const users = await User.find().select("-password"); // exclude passwords
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
