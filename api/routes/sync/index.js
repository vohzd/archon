const express                             = require("express");
const { errorHandler }                    = require("../../helpers/errorHandler.js");
const router                              = express.Router();

const sync                                = require("../../services/sync/index.js");

router.post("/", async (req, res) => {
  console.log("route: POST /sync")
  console.log(req.body);
  try {

    sync.update(req.body.website, req.body.tracks)

    return res.send(true);
  }
  catch (e){ return errorHandler(res, e); }
});

module.exports = router;
