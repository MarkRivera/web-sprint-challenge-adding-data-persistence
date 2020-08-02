const express = require("express");
const router = express.Router();
const Project = require("../../data/projects/project-model");
// GET ALL PROJECTS

router.get("/", (req, res) => {
  Project.find()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ err: "Couldn't find the projects" });
    });
});

// GET ONE PROJECT

// ADD ONE PROJECT

// UPDATE ONE PROJECT

// DELETE ONE PROJECT

module.exports = router;
