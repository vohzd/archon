const express                   = require("express");
const router                    = express.Router();

const { errorHandler }          = require("../../helpers/errorHandler.js");

const {
  create,
  read,
  update,
  del
}                               = require("../../services/markdown/index.js");

/*

router.get("/markdown", async (req, res) => {
  try {
    const response = await getBlogs();
    return res.send(response);
  }
  catch (e){ return errorHandler(res, e); }
});


*/


router.get("/", async (req, res) => {
  try {
    //const response = await getBlogs();
    return res.send({ yes: true });
  }
  catch (e){ return errorHandler(res, e); }
});


router.post("/", async (req, res) => {
  try {
    console.log("route: POST /markdown");
    console.log(req.body);
    const results = create(req.body.filename, req.body.contents);

    console.log(results);
    return res.send({"hello": "yo2"});
  }
  catch (e){ return errorHandler(res, e); }
});


module.exports = router;
