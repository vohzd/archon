
const WebSocket                         = require("ws");
const wss                               = new WebSocket.Server({ noServer: true })


/* not needed as of yet
const {
  archiveGH
}                                       = require("../services/github/index.js");
*/

/* INSTANTIATION */
wss.on("connection", ws => {
  ws.on("message", message => {

    console.log("function: handleMessage");
    const decoded = JSON.parse(message);

    console.log(ws);
    console.log(decoded);

  })
  /* send something back to the client
  ws.send(JSON.stringify({
    "message": "connected"
  })) */
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
