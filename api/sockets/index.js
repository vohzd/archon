import WebSocket from "ws";


import {
  createArchive,
  getArchiveSize
} from "../services/archive/index.js";


/* used for testing */
import {
  mockCreateArchive,
  mockJob
} from "../services/mock/index.js";

const wss = new WebSocket.Server({ noServer: true });


wss.on("connection", (ws) => {
  ws.on("message", async (message) => {
    const msg = JSON.parse(message);

    switch (msg.action){

      // ************************START***********************************
      case "createArchive":

      /*
          // will return a number like '92507'
          const totalTracks = await getArchiveSize(msg.website, msg.username);
          ws.send(`Total Tracks: ${totalTracks}`);

          // lastfm supports up to 1000 items per page
          // so.... divide by 1000 and rounds to nearest whole number javascript
          let totalPages = Math.round(totalTracks / 1000);

          // retreive a generator that calls the lastfm API `pages` (e.g 93) times.
          const apiCalls = await createArchive(msg.website, msg.username, totalPages);

          // send back some info to the client on progress
          let currentPage = 1;
          while (currentPage <= totalPages){
            currentPage++;
            const outcome = await apiCalls.next();
            ws.send(`Current Page: ${currentPage}`);
            console.log(outcome)
          }
*/
          // we're done here
          console.log("COMPLETE!!!!!!!!!!")
          break;
      // ------------------------FINISH----------------------------------

      // ************************START***********************************
      case "mockJob":
          mockJob(ws, msg.website, msg.username);
          break;
      // ------------------------FINISH----------------------------------

      // ************************START***********************************
      case "mockCreateArchive":
        console.log("mockCreateArchive")
        mockCreateArchive(ws, website, username)
        /*
        const jobIndex = getJobIndex("mockCreateArchive", msg.website, msg.username);
        console.log(jobIndex);


        const pages = 5;
        let currentPage = 1;
        const mockGenerator = mockCreateArchive(msg.website, msg.username, pages);


        while (currentPage <= pages){
          currentPage++;
          const outcome = await mockGenerator.next();

          ws.send(`Current Page: ${currentPage}`);

          console.log("return this data somewhere!!!!!!")
          console.log(outcome)
        }

*/

        break;
      // ------------------------FINISH----------------------------------

      // ************************START***********************************
      default:
        console.log("default action")
        break;
      // ------------------------FINISH----------------------------------

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
