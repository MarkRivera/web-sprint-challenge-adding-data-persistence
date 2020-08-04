const express = require("express");
const router = express.Router();
const Task = require("../../data/models/task-model");
const { completionCheck } = require("../completion-check");

// GET ALL PROJECTS

router.get("/", (req, res) => {
  Task.find()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ err: "Couldn't find the tasks" });
    });
});

// GET ONE PROJECT

router.get("/:id", (req, res) => {
  Task.findById(req.params.id)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ err: "Could not find task with that ID" });
    });
});

// ADD ONE PROJECT

router.post("/", completionCheck, (req, res) => {
  Task.add(req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ err: "Something went wrong, sorry!" });
    });
});

// UPDATE ONE PROJECT

router.put("/:id", (req, res) => {
  Task.update(req.params.id)
    .then((task) => {
      if (!task) {
        res.status(404).json({ err: "That task does not exist" });
      } else {
        res.status(204).json(task);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ err: "Something went wrong!" });
    });
});

// DELETE ONE PROJECT

router.delete("/:id", (req, res) => {
  const deleted = Task.remove(req.params.id);
  res.status(200).json(deleted);
});

module.exports = router;
