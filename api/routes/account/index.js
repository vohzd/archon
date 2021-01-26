const express                             = require("express");
const { errorHandler }                    = require("../../helpers/errorHandler.js");
const router                              = express.Router();

const account                             = require("../../services/account/index.js");

router.get("/", async (req, res, next) => {
  console.log("route: GET /database")
  try {
    const accounts = await account.get();
    return res.json(accounts);
  }
  catch (e){ return errorHandler(res, e); }
});


router.post("/", async (req, res) => {
  console.log("route: POST /database/account")
  console.log(req.body);
  try {
    return res.send(await account.add(req.body.website, req.body.username));
  }
  catch (e){ return errorHandler(res, e); }
});


module.exports = router;
