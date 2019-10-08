const express = require("express");
const router = new express.Router();
const User = require("./../models/user");

// Create user
router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    const response = await user.save();
    res.status(201).send(response);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Fetch users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Fetch user
router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    if (!user) return res.status(404).send();
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Update user
router.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) return res.status(400).send({ error: "Invalid updates!" });
  try {
    const user = await User.findById(req.params.id);
    updates.forEach(update => {
      user[update] = req.body[update];
    });
    await user.save();
    if (!user) return res.status(404).send();
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Delete user
router.delete("/users/:id", async (req, res) => {
  try {
    const response = await User.findByIdAndDelete(req.params.id);
    if (!response) return res.status(404).send();
    res.send(response);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Login
router.post("/user/login", async (req, res) => {
  try {
    const user = await User.findByCrendentials({ ...req.body });
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
