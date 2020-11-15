
/* DEPS */
const WebSocket = require("ws");
const wss = new WebSocket.Server({ noServer: true })

const {
  archiveGH
}                   = require("../services/github/index.js");


/* CALL METHODS */
wss.on("connection", ws => {
  ws.on("message", message => {
    handleMessage(message);
  })
  /* send something back to the client
  ws.send(JSON.stringify({
    "message": "connected"
  })) */
});


/* METHODS */
function handleMessage(message){
  console.log("MESSAGE WAS RECEIV0000")
  console.log(message)
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

  this.nuxt.hook("ready", nuxt => {
    console.log("NUXT IS READY")
    console.log(nuxt)
  })
}
