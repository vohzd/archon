
const WebSocket                         = require("ws");
const wss                               = new WebSocket.Server({ noServer: true })


/* not needed as of yet
const {
  archiveGH
}                                       = require("../services/github/index.js");
*/

const { archive }                       = require("../services/archive/index.js");

/* INSTANTIATION */
wss.on("connection", ws => {
  ws.on("message", message => {
    archive(JSON.parse(message), ws);
  })
});


/* CREATE THE SERVER AND COMBINE IT WITH NUXT */
export default function () {
  this.nuxt.hook("listen", server => {
    server.on("upgrade", (request, socket, head) => {
      wss.handleUpgrade(request, socket, head, ws => {
        wss.emit("connection", ws);
      })
    })
  })
}
