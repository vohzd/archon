import fs from "fs-extra";

/*
  *******************************************************
  INTERNAL FILE I/O

  These are private methods
  *******************************************************
*/
export async function _get(fileName){
  console.log("method: _get");
  console.log(fileName);
  const fileExists = await fs.pathExists(fileName);
  console.log("FILE EXISTS?!");
  console.log(fileExists);

  if (!fileExists){
    await fs.writeJSON(fileName, []);
  }
  return await fs.readFile(fileName, "utf-8");
}

export async function _put(fileName, data){
  console.log("_put called");
  console.log(fileName);
  console.log(data);
  let file = JSON.parse(await _get(fileName));

  console.log("file");
  console.log(file);

  console.log("new data");
  console.log(data);
  file.push(data)
  return await fs.writeJSON(fileName, file);
}
