const express = require("express");
const server = express();
require("./config/server.js")(server);

const account   = require("./routes/account/index.js");
const markdown  = require("./routes/markdown/index.js");
const oauth     = require("./routes/oauth/index.js");
const sync      = require("./routes/sync/index.js");

server.use("/account", account);
server.use("/markdown", markdown);
server.use("/oauth", oauth);
server.use("/sync", sync);

module.exports = {
  path: "/api",
  handler: server
}
