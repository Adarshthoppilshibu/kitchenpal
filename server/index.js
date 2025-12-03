const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

// Root route (fixes your 404 error)
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Import routes
const recipeRoutes = require("./routes/recipeRoutes");
app.use("/recipes", recipeRoutes);

// Database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch(err => console.log("MongoDB Connection Error:", err));

app.listen(process.env.PORT, () => {
    console.log("Server started on port " + process.env.PORT);
});
console.log("Auth feature branch running");
