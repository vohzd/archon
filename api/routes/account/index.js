const express                             = require("express");
const { errorHandler }                    = require("../../helpers/errorHandler.js");
const router                              = express.Router();

const {
  getAccounts,
  modifyAccounts
}                                         = require("../../services/account/index.js");

router.get("/", async (req, res, next) => {
  console.log("route: GET /database")
  try {
    const accounts = await getAccounts();
    return res.json(accounts);
  }
  catch (e){ return errorHandler(res, e); }
});


router.post("/", async (req, res, next) => {
  console.log("route: POST /database/account")
  try {
    const key = req.body.website;
    const value = req.body.accountName;
    await modifyAccounts(key, value);
    return res.send({ message: "hello" });
  }
  catch (e){ return errorHandler(res, e); }
});


module.exports = router;
