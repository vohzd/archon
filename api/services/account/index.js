import db from "../../db/index.js";

async function getAccounts(query){
  const data = db.get();
  return data;
}

async function modifyAccounts(key, value){
  console.log("service: modifyAccount")
  console.log(key)
  console.log(value)
  const result = await db.modify(key, value);
  console.log(result);
  return result
}

module.exports = {
  getAccounts,
  modifyAccounts
};
