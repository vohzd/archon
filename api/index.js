import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

/* config so we can use json and cookies */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

app.get("/", (req, res) => {
  console.log("THIS IS THE BASE API");
});

app.post("/connect/:siteName", (req, res) => {
  console.log("BASE ROUTE222");
  console.log(req.body);
  console.log(req.params);

  res.send({
    "wow": "wow22222211"
  })



});

module.exports = {
  path: '/api',
  handler: app
}
