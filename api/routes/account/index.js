const express                             = require("express");
const { errorHandler }                    = require("../../helpers/errorHandler.js");
const router                              = express.Router();

const { collection }                      = require("../../db/index.js");
const accounts                            = collection("accounts");


router.get("/", async (req, res, next) => {
  console.log("route: GET /account")
  try {
    return res.json(await accounts.get())
  }
  catch (e){ return errorHandler(res, e); }
});


router.post("/", async (req, res) => {
  console.log("route: POST /database/account")
  console.log(req.body);
  try {

    const newRec = await accounts.put(req.body);

    //const col = await collection.put("accounts", req.body);

    //const newOne = await accounts.put(req.body);

    console.log(newRec);

    return res.send({ success: true });
    //return res.send(await account.add(req.body.website, req.body.username));
  }
  catch (e){ return errorHandler(res, e); }
});


module.exports = router;
