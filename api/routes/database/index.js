const express                             = require("express");
const { errorHandler }                    = require("../../helpers/errorHandler.js");
const router                              = express.Router();


const {
  getDB,
  modifyDB
}                                         = require("../../services/database/index.js");


router.get("/", async (req, res, next) => {
  console.log("route: GET /database")

  try {
    await getDB();
    return res.send({ message: "hello" });
  }
  catch (e){ return errorHandler(res, e); }
});


router.post("/account", async (req, res, next) => {
  console.log("route: POST /database/account")
  try {
    const key = req.body.website;
    const value = req.body.accountName;
    await modifyDB(key, value);
    return res.send({ message: "hello" });
  }
  catch (e){ return errorHandler(res, e); }
});


module.exports = router;
