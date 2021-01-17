
import db from "../../db/index.js";

async function getAccount(){

  console.log("GET")
  console.log(db.get())

  return "HELLo";
}

async function modifyAccount(key, value){

  console.log("service: modifyAccount")
  console.log(key)
  console.log(value)

  const result = await db.modify(key, value);
  console.log(result);
  return result
}

module.exports = {
  getAccount,
  modifyAccount
};
