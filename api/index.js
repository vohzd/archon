const express = require("express");
const server = express();
require("./config/server.js")(server);

const database  = require("./routes/database/index.js");
server.use("/database", database);

module.exports = {
  path: "/api",
  handler: server
}
