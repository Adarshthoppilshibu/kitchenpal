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

// UPDATE recipe
router.put("/update/:id", async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json({ message: "Recipe updated", updatedRecipe });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE recipe
router.delete("/delete/:id", async (req, res) => {
    try {
        await Recipe.findByIdAndDelete(req.params.id);
        res.json({ message: "Recipe deleted" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


module.exports = router;
