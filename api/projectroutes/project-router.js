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

router.get("/:id", (req, res) => {
  Project.findById(req.params.id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ err: "Could not find project with that ID" });
    });
});

// ADD ONE PROJECT

router.post("/", (req, res) => {
  Project.add(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ err: "Something went wrong, sorry!" });
    });
});

// UPDATE ONE PROJECT

router.put("/:id", (req, res) => {
  Project.update(req.params.id)
    .then((project) => {
      if (!project) {
        res.status(404).json({ err: "That project does not exist" });
      } else {
        res.status(204).json(project);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ err: "Something went wrong!" });
    });
});

// DELETE ONE PROJECT

module.exports = router;
