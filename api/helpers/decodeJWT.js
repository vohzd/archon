const jwt         = require("jsonwebtoken");
const { secret }  = require("../config/jwtSecret.js");

function decodeJWT(token){
  console.log("DECODE SERVICE");
  console.log(token);
  if (token){

    console.log(token);
    console.log(secret);
    return jwt.verify(token, secret);
  }
}

module.exports = {
  decodeJWT
}
