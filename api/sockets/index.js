
/* DEPS */
const WebSocket = require("ws");
const wss = new WebSocket.Server({ noServer: true })

const {
  archiveGH
}                   = require("../services/github/index.js");


/* CALL METHODS */
wss.on("connection", ws => {
  ws.on("message", message => {
    handleMessage(message, ws);
  })
  /* send something back to the client
  ws.send(JSON.stringify({
    "message": "connected"
  })) */
});


/* METHODS */
function handleMessage(message, ws){
  console.log("MESSAGE WAS RECE")
  const decoded = JSON.parse(message);
  if (decoded.type === "sync-github"){
    archiveGH(decoded.data);
    ws.send("RECEIVED REQUEST FOR GITHUB")
  }

}

/* CREATE THE SERVER AND COMBINE IT WITH NUXT */
export default function () {
  console.log("you are HERE")
  this.nuxt.hook("listen", server => {
    console.log("listening...")
    server.on("upgrade", (request, socket, head) => {
      wss.handleUpgrade(request, socket, head, ws => {
        console.log("bet this doesn't fire too ofer")
        wss.emit("connection", ws);
      })
    })
  })

}
