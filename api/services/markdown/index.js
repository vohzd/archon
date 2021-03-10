

//////////////////////////////////////////////////////

import path                       from "path";
import fs                         from "fs-extra";

const base  = `${ path.resolve() }/data/markdown`;

async function create (filename, data) {
  console.log("service: create");
  console.log(filename);
  console.log(data);
  return await fs.outputFile(`${base}/${filename}.md`, data);
}

async function read (filename) {
  return await fs.readFile(base, "utf-8");
}

async function update ( ) {

}

async function del ( ) {

}

module.exports = {
  create, read, update, del
};
