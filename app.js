const express = require("express");
const app = express();
const logger = require("./logger");

setInterval(() => {
  logger.info("nodeJS SERVER");
}, 60 * 1000);
module.exports = app;
