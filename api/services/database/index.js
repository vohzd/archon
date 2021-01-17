
/*
import fs from "fs";
import path from "path"
import util from "util";

const exec = util.promisify(require("child_process").exec);
const exists = util.promisify(fs.exists);
const getDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const base = path.resolve();
const dataPath = `${base}/data/`;
*/

import fs from "fs";
import path from "path";
import util from "util";

const exists = util.promisify(fs.exists);
const getDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const dataPath = `${ path.resolve() }/data/`;

async function modifyDB(key, value){
  console.log("service: modifyDB");
  const fileName = `${dataPath}/accounts.json`;
  let file = JSON.parse(await readFile(fileName, "utf-8"));

  // build an initial state if it's the first one...
  if (!file[key]){
    file[key] = [ value ];
  }
  // push/write a fresh one only if unique
  if (!file[key].includes(value)){
    console.log("is fresh")
    file[key].push(value);
    await writeFile(fileName, JSON.stringify(file));
  }

  return "done"
}

async function getDB(name) {
  console.log("service: getDB")
  const fileName = `${dataPath}/accounts.json`;
  if (!await exists(fileName)){
    await writeFile(fileName, JSON.stringify({}));
  }
  return await readFile(fileName, "utf-8");

  /*
  // user metadata
  fs.writeFileSync(`${dataPath}/${data.user.login}/user.txt`, data.user.login)

  // repo metadata
  fs.writeFileSync(`${dataPath}/${data.user.login}/repos/index.json`, JSON.stringify(data.repos))

  // iterate and yield to give progress + set up a generator
  ws.send("BEGINNING TO ARCHIVE")
  const generate = generateRepos(data.repos, path);
  const quant = data.repos.length;

  for (let i = 0; i <= data.repos.length; i++){
    ws.send(`archiving ${ data.repos[i] }`)
    const outcome = generate.next();
    if (outcome.done){ ws.send("COMPLETED") }
  }

  return "123"*/

}


module.exports = {
  getDB,
  modifyDB
};
