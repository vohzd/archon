const fs = require("fs");
const path = require('path');
const util = require("util");
const exec = util.promisify(require("child_process").exec);
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


async function* generateRepos(repos, path){
  // do some work
  for ([index, repo] of repos.entries()){
    try {
      const repoPath = `${path}/repos/personal/${repo.full_name}`
      if (!fs.existsSync(repoPath)){
        const { stdout, stderr } = await exec(`git clone ${ repo.clone_url } ${repoPath}`);

        yield stdout
        //stdout.o
        //yield `ARCHIVED: ${ repo.full_name }`;
        //console.log(stdout);
        //console.log(stderr);
      }
      else {
        console.log("ALREADY EXISTS");
      }

    }
    catch (e){
      console.log(e);
      throw e
    }

  }

  // return on complete
  return "DONE"

}


async function archiveGH(data, ws) {
  const path = `${dataPath}/${data.user.login}`;

  console.log(dataPath);
  console.log(path);
  if (!fs.existsSync(path)){
    console.log("I DONT EXIST");
    fs.mkdirSync(path)
    fs.mkdirSync(`${path}/repos`)
  }
  else {
    console.log("I DO EXIST");
  }



  // user metadata
  fs.writeFileSync(`${dataPath}/${data.user.login}/user.txt`, data.user.login)

  // repo metadata
  fs.writeFileSync(`${dataPath}/${data.user.login}/repos/index.json`, JSON.stringify(data.repos))



  // iterate and yield to give progress
  // set up a generator

  ws.send("BEGINNING TO ARCHIVE")

  const generate = generateRepos(data.repos, path);

  const quant = data.repos.length;

  for (let i = 0; i <= data.repos.length; i++){
    console.log("looping");
    console.log(i);
    ws.send(`archiving ${ data.repos[i] }`)
    const outcome = generate.next();
    console.log(outcome);
    if (outcome.done){
      ws.send("COMPLETED")
    }
  }


  // iterate through them and inform the parent



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
