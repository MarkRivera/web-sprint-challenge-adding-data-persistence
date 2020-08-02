const express = require("express");
const server = express();
const helmet = require("helmet");

const ProjectRouter = require("./projectroutes/project-router");

server.use(helmet());
server.use(express.json());

server.use("/api/projects", ProjectRouter);
// server.use("/api/resources", ResourceRouter);
// server.use("/api/tasks", TaskRouter);

module.exports = server;
