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
  console.log("get called");
  console.log(fileName);
  const exists = await fileExists(fileName);


  /*
  if (!fs.existsSync(path)){
    fs.mkdirSync(path)
    fs.mkdirSync(`${path}/repos`)
  }*/

  if (!exists){
    console.log("DOESNT EXIST");
    //fs.mkdirSync(fileName)
    //const actualFilename = fileName.split("/")[fileName.split("/").length - 1];
    //console.log(actualFilename);
    //await fs.mkdir(fileName, { recursive: true }, JSON.stringify([]))
    await writeFile(fileName, JSON.stringify([]))

  };
  return await readFile(fileName, "utf-8");
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
