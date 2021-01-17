import fs from "fs";
import path from "path";
import util from "util";

const exists = util.promisify(fs.exists);
const getDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const dataPath = `${ path.resolve() }/data/`;
const fileName = `${dataPath}/db.json`;

async function get(){
  if (!await exists(fileName)){ await writeFile(fileName, JSON.stringify({})) }
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

async function modify(key, value){
  let file = JSON.parse(await readFile(fileName, "utf-8"));
  // build an initial state if it's the first one...
  if (!file[key]){ file[key] = [ value ] }
  // push/write a fresh one only if unique
  if (!file[key].includes(value)){ file[key].push(value);}
  return await writeFile(fileName, JSON.stringify(file));
}

export default {
  get,
  modify
}
