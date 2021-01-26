//import db from "../../db/index.js";

import path from "path";

const nedb = require("nedb-promises");
const db = nedb.create(`${ path.resolve() }/data/accounts.db`);

const accounts = {

  async add(website, username){
    db.insert({ website, username})
    return "HELLO"
  },

  async get(query){
    console.log("service: account.get()");
    const all = await db.find({})
    console.log(all);
    return "HELLO";
  },


}


module.exports = accounts;
