const express = require("express");
const Task = require("../models/Task");
const auth = require("../middleware/auth");

const router = express.Router();

// Get all tasks for logged-in user
router.get("/", auth, async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
});

// Create task
router.post("/", auth, async (req, res) => {
  const task = new Task({
    user: req.user.id,
    title: req.body.title
  });

  await task.save();
  res.status(201).json(task);
});

// Update task
router.put("/:id", auth, async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    req.body,
    { new: true }
  );

  res.json(task);
});

// Delete task
router.delete("/:id", auth, async (req, res) => {
  await Task.findOneAndDelete({
    _id: req.params.id,
    user: req.user.id
  });

  res.json({ message: "Task deleted" });
});

module.exports = router;
