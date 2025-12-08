const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

console.log("Auth feature branch running");
console.log("Auth branch active");

const app = express();
app.use(express.json());

// Root route
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Import recipe routes
const recipeRoutes = require("./routes/recipeRoutes");
app.use("/recipes", recipeRoutes);

// Import auth routes
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

// Database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch(err => console.log("MongoDB Connection Error:", err));

// Start server
app.listen(process.env.PORT, () => {
    console.log("Server started on port " + process.env.PORT);
});
