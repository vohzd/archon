import path                       from "path";
const dataPath                    = `${ path.resolve() }/data`;

import shortId                    from "../helpers/id.js";

import {
  _get, _put
}                                 from "./_methods.js";


/*
  *******************************************************

  PUBLIC API

  These are exposed to whatever needs it
  *******************************************************
*/
export function collection(name){
  console.log(`initialising collection: ${name}`);
  const fileName = `${dataPath}/${name}.json`;

  return {
    async get(query){
      console.log("collection.get()");

      // literally returns the entire file for now...
      // TODO: implement 'query'
      return await _get(fileName);
    },
    async put(data){
      console.log("collection.put()");
      console.log(data);
      // appends a completely new item of the _id is missing or DOESNT exist in the file
      const _id = data._id ? data._id : shortId.gen();

      console.log(_id);

      return await _put(fileName, { _id, ...data })
    },
    /*
    async update(data){
      console.log("update");
      console.log(data);
    }*/
  }
}
