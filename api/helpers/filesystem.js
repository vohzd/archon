const fs                                     = require("fs-extra");
const path                                   = require("path");
const rootDir                                = path.resolve();

async function createFolders(folders){
  console.log("helper: createFolders");
  return await fs.ensureDir(`${rootDir}/${folders}`);
}

async function createFile(fullPath, fileContents){
  console.log("helper: createFile");
  return await fs.outputFile(`${rootDir}/${fullPath}`, fileContents);
}


module.exports = {
  createFile,
  createFolders
};
