import fs from "fs-extra";
import path from "path";
import id from "../helpers/id.js";

const dataPath = `${ path.resolve() }/data`;

/* INTERNAL FILE I/O */
async function _get(fileName){
  await fs.ensureFile(fileName);
  return await fs.readFile(fileName, "utf-8");
}

async function _append(fileName, data){
  console.log("append caalled");
  console.log(fileName);
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
