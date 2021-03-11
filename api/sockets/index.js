import WebSocket from "ws";

import {
  getArchiveSize
} from "../services/archive/index.js";

const wss = new WebSocket.Server({ noServer: true })

/* INSTANTIATION */
wss.on("connection", (ws) => {
  ws.on("message", async (message) => {

    /*
     it always arrives as a string
     */
    const msg = JSON.parse(message);

    switch (msg.action){

      case "createArchive":
        console.log("createArchive")

        /* returns integer */
        const size = await getArchiveSize(msg.website, msg.username);
        ws.send(`Total Size: ${size}`)

        //const something = getArchiveSize(msg.website, msg.username);
        //console.log(something)


        break;

      default:
        console.log("default action")
        break;


    }

    //archive(JSON.parse(message), ws);
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
