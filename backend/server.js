const express = require("express");
console.log("🚨 THIS SERVER FILE IS RUNNING 🚨");

const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/test", (req, res) => {
  return res.json({ ok: true, body: req.body });
});

const PORT = 5050;
app.listen(PORT, () => {
  console.log("MINIMAL SERVER RUNNING ON 5050");
});
