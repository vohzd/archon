const fs = require("fs");
const path = require('path');
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const getDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const base = path.resolve();
const dataPath = `${base}/data/github`;


async function* generateRepos(repos, path){
  for ([index, repo] of repos.entries()){
    try {
      const repoPath = `${path}/repos/personal/${repo.full_name}`
      if (!fs.existsSync(repoPath)){
        const { stdout, stderr } = await exec(`git clone ${ repo.clone_url } ${repoPath}`);
        yield stdout
      }
    }
    catch (e){ throw e }
  }
  // return on complete
  return "DONE"
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

  // iterate and yield to give progress + set up a generator
  ws.send("BEGINNING TO ARCHIVE")
  const generate = generateRepos(data.repos, path);
  const quant = data.repos.length;

  for (let i = 0; i <= data.repos.length; i++){
    ws.send(`archiving ${ data.repos[i] }`)
    const outcome = generate.next();
    if (outcome.done){ ws.send("COMPLETED") }
  }

  return "hello"
}


module.exports = {
  archiveGH
};
