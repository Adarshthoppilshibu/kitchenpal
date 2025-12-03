const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");

// Test route
router.get("/", (req, res) => {
    res.send("Recipe route works");
});

// CREATE recipe (POST)
router.post("/add", async (req, res) => {
    try {
        const recipe = await Recipe.create(req.body);
        res.json(recipe);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// READ recipes (GET)
router.get("/all", async (req, res) => {
    const recipes = await Recipe.find();
    res.json(recipes);
});

module.exports = router;
