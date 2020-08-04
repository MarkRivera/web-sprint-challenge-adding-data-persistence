const express = require("express");
const router = express.Router();
const Resource = require("../../data/models/resource-model");

// GET ALL resourceS

router.get("/", (req, res) => {
  Resource.find()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ err: "Couldn't find the resources" });
    });
});

// GET ONE resource

router.get("/:id", (req, res) => {
  Resource.findById(req.params.id)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ err: "Could not find resource with that ID" });
    });
});

// ADD ONE resource

router.post("/", (req, res) => {
  Resource.add(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ err: "Something went wrong, sorry!" });
    });
});

// UPDATE ONE resource

router.put("/:id", (req, res) => {
  Resource.update(req.params.id)
    .then((resource) => {
      if (!resource) {
        res.status(404).json({ err: "That resource does not exist" });
      } else {
        res.status(204).json(resource);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ err: "Something went wrong!" });
    });
});

// DELETE ONE resource

router.delete("/:id", (req, res) => {
  const deleted = Resource.remove(req.params.id);
  res.status(200).json(deleted);
});

module.exports = router;
