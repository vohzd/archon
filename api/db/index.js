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
  console.log("db: get")

  if (!await exists(fileName)){
    await writeFile(fileName, JSON.stringify({
      "accounts": []
    }));
  };

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

async function append(file, obj){
  return file.push(obj)
}

async function modify(key, value){

  console.log("db: modify")

  console.log(key)
  console.log(value);
  let file = JSON.parse(await readFile(fileName, "utf-8"));

  // create a brand spanking new file
  if (file.accounts.length === 0){
    file = append(file, {
      website: key,
      linkedAccounts: [ value ]
    })
  }

  let foundIndex = 0;
  let arrCopy = file.accounts.find((v, i) => {
    foundIndex = i;
    return v.website === key;
  });

  // this means you've passed a brand new nested property!
  if (!arrCopy){
    file = append(file, {
      website: key,
      linkedAccounts: [ value ]
    })
  }

  console.log("did we find something?!")
  console.log(arrCopy)

  const exists = arrCopy.linkedAccounts.includes(value);



  // append ONLY if unique
  if (!exists){
    file.accounts[foundIndex].linkedAccounts.push(value);
  }



  console.log(file)

  return await writeFile(fileName, JSON.stringify(file))
  // build an initial state if it's the first one...

  /*
  if (!file.accounts[]){
    console.log("build an initial file plz");
    file = {
      accounts: [{
          name: key,
          linkedAccounts: [ value ]
        }
      ]
    }
  }*/





  //if (!file.accounts[]){ file[key] = [ value ] }
  // push/write a fresh one only if unique
  //if (!file[key].includes(value)){ file[key].push(value);}
  //return await writeFile(fileName, JSON.stringify(file));*/
}

export default {
  get,
  modify
}
