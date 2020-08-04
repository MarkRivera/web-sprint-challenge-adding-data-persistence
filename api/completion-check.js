const express = require("express");

function completionCheck(req, res, next) {
  const completed = req.body.userInput.completed;

  if (completed) {
    next();
  } else {
    req.body.userInput.completed = false;
    next();
  }
}

module.exports = {
  completionCheck,
};
