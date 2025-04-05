require('dotenv').config();

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: 'http://localhost:4300', // allow only Angular frontend
  credentials: true, // if you're using cookies or sessions
}));

app.use(express.json());


app.use("/api/auth", require("./routes/auth.routes"));

const userRoutes = require("./routes/user.routes");
app.use("/api/users", userRoutes);

app.get("/api/protected", require("./middleware/auth"), (req, res) => {
  res.json({ message: "Welcome, authenticated user! 🔐" });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
