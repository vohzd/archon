const express = require("express");
const server = express();
require("./config/server.js")(server);

const account  = require("./routes/account/index.js");
server.use("/account", account);

module.exports = {
  path: "/api",
  handler: server
}
