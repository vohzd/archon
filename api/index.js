const express = require("express");
const app = express();
require("./config/server.js")(app);
//require("./config/db.js");

/*
const websiteRoutes  = require("./routes/website/index.js");

server.use("/", websiteRoutes);
*/

console.log("lul223222222")
module.exports = {
  path: "/api",
  handler: app
}
