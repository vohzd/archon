//import db from "../../db/index.js";


/*
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
    return await db.find({});
  },

  async update(id, data){
    console.log(id);
    console.log(data);
    const updated = await db.update({ _id: id }, { $inc: { ...data } }, { upsert: true });
    console.log(updated);
    return updated
  }


}
*/

//module.exports = accounts;
