const express                             = require("express");
const { errorHandler }                    = require("../../helpers/errorHandler.js");
const router                              = express.Router();


/*
const {
  get,
}                                         = require("../../services/account/index.js");
*/

router.get("/", async (req, res, next) => {
  console.log("route: GET /database")

  try {
    return res.send({ message: "hello" });
  }
  catch (e){ return errorHandler(res, e); }
});


module.exports = router;
