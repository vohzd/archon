import axios from "axios";


export default {
  // be aware this is a generator!
  async *createArchive(username, totalPages){
    console.log("do some magic here!")
    // if you set this to 0 lastfm's api freaks out
    let currentPage = 1;

    while (currentPage <= totalPages){
      console.log(`getting page ${currentPage}`);
      console.log(`totalPages: ${totalPages}`)

      // get the next page and jump back to the top of the loop
      currentPage++;

      yield await axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=3329fbd5c9a9642aac2144cff8dc183a&format=json&limit=1000&page=${currentPage}`);
    }

    return;
  },
  async getTotalTracks(username){
    console.log("2")
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=3329fbd5c9a9642aac2144cff8dc183a&format=json&limit=1&page=1`);
        resolve(data.recenttracks["@attr"].total)
      }
      catch (e){ reject(e) }
    });
  }
}
