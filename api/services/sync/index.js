import path from "path";
import nedb from "nedb-promises";
import filenamify from "filenamify";

const accounts = {



  async get(query){
    const db = nedb.create(`${ path.resolve() }/data/${query.website}.db`);
    console.log("service: account.get()");
    return await db.find({});
  },

  async update(website, data){

    const db = nedb.create(`${ path.resolve() }/data/${filenamify(website)}.db`);


    console.log(data);
    return await db.insert(data)






  }


}


module.exports = accounts;
