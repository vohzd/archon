const fs = require("fs");
const path = require('path');
const util = require("util");

const getDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const base = path.resolve();
const dataPath = `${base}/data/github`;


/* ignore for now
async function getFiles(){
  let promises = [];

  // get all our files in the /data dir
  const files =  await getDir(dataPath);

  // create an array of promises
  files.forEach((file) => {
    promises.push(readFile(`${dataPath}/${file}`, "utf-8"));
  });

  // resolve them and send back the contents
  return await Promise.all(promises);
}*/


function* generateRepos(repos){
  // do some work
  for ([index, repo] of repos.entries()){
    yield `ARCHIVING REPO NUM: ${index}`;
  }

  // return on complete
  return;

}


async function archiveGH(data, ws) {
  const path = `${dataPath}/${data.user.login}`;

  if (!fs.existsSync(path)){
    fs.mkdirSync(path)
    fs.mkdirSync(`${path}/repos`)
  }

  // user metadata
  fs.writeFileSync(`${dataPath}/${data.user.login}/user.txt`, data.user.login)

  // repo metadata
  fs.writeFileSync(`${dataPath}/${data.user.login}/repos/index.json`, JSON.stringify(data.repos))


  // iterate and yield to give progress
  // set up a generator

  ws.send("BEGINNING TO ARCHIVE")

  const generate = generateRepos(data.repos);

  // iterate through them and inform the parent

  console.log(generate.next());
  console.log(generate.next());
  console.log(generate.next());
  console.log(generate.next());
  console.log(generate.next());

  ws.send("COMPLETED")


  /*
  console.log("archivibg,,,,")
  const files = await getFiles();
  console.log(files)
  console.log(data)*/

  // only create the user directory if it doesnt exists, else ndoe willl throw an error


  return "hello"
}


module.exports = {
  archiveGH
};
