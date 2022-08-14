const express = require("express");
// const helmet = require("helmet");
// const cors = require("cors");
// const path = require("path");
const dotenv = require("dotenv");
const config_result = dotenv.config();
if (process.env.NODE_ENV != "production" && config_result.error) {
  throw config_result.error;
}

const v1Router = require('./routes/v1/router');

const server = express();

server.use(express.json());
// server.use(express.static(path.join(__dirname, "client/build")));
// server.use(helmet());
// server.use(cors({ origin: "*" }));

server.use('/v1', v1Router)

// Catch
server.get("*", (req, res) => {
  res.json({ message: `Hi, you've reached the WorldBoss-API!` })
  // res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Error Handler
server.use(function (req, res, next) {
  next(res.status(404));
});

module.exports = server;
