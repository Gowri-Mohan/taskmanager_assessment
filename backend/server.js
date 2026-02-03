const express = require("express");
const cors = require("cors");
console.log("🚨 THIS SERVER FILE IS RUNNING 🚨");

const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS

// Mount Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/tasks", require("./routes/tasks"));

app.post("/test", (req, res) => {
  return res.json({ ok: true, body: req.body });
});

const PORT = 5050;
app.listen(PORT, () => {
  console.log("MINIMAL SERVER RUNNING ON 5050");
});
