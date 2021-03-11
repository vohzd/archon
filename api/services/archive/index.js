//const { collection }                      = require("../../db/index.js");

import LastFM from "./adapters/lastfm/index.js";




export async function getArchiveSize(website, username){
  switch (website) {

    case "lastfm":
      console.log("getting total from lastfm")
      console.log(username)
      return await LastFM.getTotal(username);

    case "google":
      console.log("something else");
      break;

    default:
      console.log("default.....");
      break;
  }
}
