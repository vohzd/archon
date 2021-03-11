import axios from "axios";

export default {
  async getTotal(username){
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=3329fbd5c9a9642aac2144cff8dc183a&format=json&limit=1&page=1`);
        console.log(data)
        resolve(data.recenttracks["@attr"].total)
      }
      catch (e){ reject(e) }
    });
  }
}
