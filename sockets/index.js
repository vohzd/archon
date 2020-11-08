//const { websocketDownloadVideo }             = require("../services/youtube-dl/index.js");

import http from "http";
import WebSocket from "ws";

export default function(){
  this.nuxt.hook("render:before", (renderer) => {
    console.log("in some hook");
    const app = this.nuxt.renderer.app;
    const server = http.createServer(app);
    const wss = new WebSocket.Server({ server })

    this.nuxt.server.listen = (port, host) => new Promise(resolve => server.listen(port || 3000, host || 'localhost', resolve))
    this.nuxt.hook('close', () => new Promise(server.close));

    wss.on('connection', function connection(ws) {
      ws.on('message', function incoming(message) {
        console.log('received: %s', message);

        console.log("call someService here");
        //someService();
        ws.send('something');

      });

    });

  })
};
