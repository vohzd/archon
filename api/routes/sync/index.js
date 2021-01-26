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

    console.log("BODY HERE");
    console.log(req.body);

    accountsCol.update("something")
    //sync.update(req.body.website, req.body.tracks)

    return res.send(true);
  }
  catch (e){ return errorHandler(res, e); }
});

module.exports = router;
