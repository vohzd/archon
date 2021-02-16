const express                             = require("express");
const { errorHandler }                    = require("../../helpers/errorHandler.js");
const router                              = express.Router();

const { collection }                      = require("../../db/index.js");
const accounts                            = collection("accounts");


router.get("/", async (req, res, next) => {
  console.log("route: GET /account")
  try {
    console.log("hello3");
    console.log(await accounts.get());
    //const all = await accounts.get();
    //console.log(all);
    return res.json(await accounts.get())
  }
  catch (e){ return errorHandler(res, e); }
});

router.post("/", async (req, res) => {
  console.log("route: POST /account")
  console.log(req.body);
  const username = req.body.username;
  const website = req.body.website;
  const lastSync = Date.now();

  try {
    const newAccount = await accounts.put({ username, website, lastSync });
    return res.send(newAccount);
  }
  catch (e){ return errorHandler(res, e); }
});


module.exports = router;
