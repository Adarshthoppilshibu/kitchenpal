// Dummy CRUD routes for Assignment 1 milestone
// Placeholder to show CRUD structure has been started.

const express = require("express");
const router = express.Router();

// GET /api/items - placeholder
router.get("/items", (req, res) => {
  res.json({ message: "GET /api/items - placeholder (CRUD started)" });
});

// POST /api/items - placeholder
router.post("/items", (req, res) => {
  res.json({ message: "POST /api/items - placeholder (CRUD started)" });
});

module.exports = router;

