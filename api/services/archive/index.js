//const { collection }                      = require("../../db/index.js");

import LastFM from "./adapters/lastfm/index.js";

export async function createArchive(website, username, totalPages){

  switch (website) {

    case "lastfm":
      // this is a generator !
      return LastFM.createArchive(username, totalPages);
      break

    case "google":
      console.log("something else");
      break;

    default:
      console.log("default.....");
      break;
  }


}

export async function getArchiveSize(website, username){
  switch (website) {

    case "lastfm":
      return await LastFM.getTotalTracks(username);

    case "google":
      console.log("something else");
      break;

    default:
      console.log("default.....");
      break;
  }
}
