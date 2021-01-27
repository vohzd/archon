const express                             = require("express");
const { errorHandler }                    = require("../../helpers/errorHandler.js");
const router                              = express.Router();

const { collection }                      = require("../../db/index.js");
const accountsCol                         = collection("accounts");
const lastfmCol                           = collection("lastfm");

router.post("/", async (req, res) => {
  console.log("route: POST /sync")
  console.log(req.body);
  try {
    //let { data } = await this.$axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${account.username}&api_key=3329fbd5c9a9642aac2144cff8dc183a&format=json&limit=4&page=1`);


    //accountsCol.update("something")
    //sync.update(req.body.website, req.body.tracks)

    return res.send(true);
  }
  catch (e){ return errorHandler(res, e); }
});

module.exports = router;
