import fs from "fs";
import path from "path";
import util from "util";
import id from "../helpers/id.js";

const fileExists = util.promisify(fs.exists);
const getDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const dataPath = `${ path.resolve() }/data`;

/* INTERNAL FILE I/O */
async function _get(fileName){
  const exists = await fileExists(fileName);
  if (!exists){
    await writeFile(fileName, JSON.stringify([]))
  };
  return await readFile(fileName, "utf-8");
}

async function _append(fileName, data){
  let file = JSON.parse(await _get(fileName));

  // todo, unique ids...
  file.push(data)

  return await writeFile(fileName, JSON.stringify(file));
}


/* PUBLIC API */
export function collection(name){

  console.log(`init ${name}`);

  const fileName = `${dataPath}/${name}.json`;

  return {
    async get(query){
      return await _get(fileName);
    },
    async put(data){
      return await _append(fileName, { id: id.gen(), ...data })
    },
    async update(data){
      console.log("update");
      console.log(data);
    }
  }
}
