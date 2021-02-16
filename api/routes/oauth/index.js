const express                             = require("express");
const { errorHandler }                    = require("../../helpers/errorHandler.js");
const router                              = express.Router();


/*
const { collection }                      = require("../../db/index.js");
const accounts                            = collection("accounts");
*/

const {
  generateAuthURL,
  completeAuth
}                                         = require("../../services/oauth/index.js");


// gets a secure auth URL for whatever service (right now, just google/youtube)
router.get("/generate-url", async (req, res) => {
  console.log("route: GET /oauth/generate-url");
  try {
    const website = req.query.website;
    const url = await generateAuthURL(website)
    console.log(website);
    return res.send({ url });
  }
  catch (e){ return errorHandler(res, e); }
});

router.post("/complete-auth", async(req, res) => {
    try {
      console.log("route: POST /oauth/complete-auth");
      const website = req.body.website;
      const token = req.body.token;
      const outcome = await completeAuth(website, token);
      res.send({ status: "ok" });
    }
    catch (e){ return errorHandler(res, e); }
});


module.exports = router;
