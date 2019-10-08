const express = require("express");
const router = new express.Router();
const Task = require("./../models/task");

// Create task
router.post("/task", async (req, res) => {
  const task = new Task(req.body);
  try {
    const response = await task.save();
    res.status(201).send(response);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Fetch Tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Fetch Task
router.get("/task/:id", async (req, res) => {
  try {
    const task = await Task.findById({ _id: req.params.id });
    if (!task) return res.status(404).send();
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Update Task
router.patch("/task/:id", async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["description", "completed"];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) return res.status(400).send({ error: "Invalid Operation" });
    const task = await Task.findById(req.params.id);
    updates.forEach(update => {
      task[update] = req.body[update];
    });
    task.save();
    if (!task) return res.status(404).send();
    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Delete Task
router.delete("/task/:id", async (req, res) => {
  try {
    const response = await Task.findByIdAndDelete(req.params.id);
    if (!response) return res.status(404).send();
    res.send(response);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
