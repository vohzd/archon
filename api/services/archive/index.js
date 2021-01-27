const axios                               = require("axios");
const { collection }                      = require("../../db/index.js");

async function archive (account, ws){
  console.log("fn achive");
  console.log(account);

  ws.send(`archiving ${ account.website } ...`);
  const col = collection(`${account.website}/${account.username}`);

  if (account.website === "last.fm"){
    try {
      const { data } = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${account.username}&api_key=3329fbd5c9a9642aac2144cff8dc183a&format=json&limit=1&page=1`);
      const totalTracks = data.recenttracks["@attr"].total;
      ws.send(`total tracks: ${ totalTracks } `);

      await col.put({
        totalTracks
      })



      console.log(data);
    }
    catch (e){
      console.log("wtf, failed");
      console.log(e);
      console.log(e.message);
      console.log(e.reason);

    }
  }
}


/*
switch (decoded.website) {

  case "last.fm":
    console.log("do some lastfm fuckery here");
    break;

  case "something":
    console.log("nwa");
    break;

  default:
    console.log("they're all dead dave");
    break;
}*/


module.exports = {
  archive
}
