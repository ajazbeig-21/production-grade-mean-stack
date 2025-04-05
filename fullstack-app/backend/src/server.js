require('dotenv').config();

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));

app.get("/api/protected", require("./middleware/auth"), (req, res) => {
  res.json({ message: "Welcome, authenticated user! 🔐" });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
