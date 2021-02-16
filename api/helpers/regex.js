/* useful for when you have ftp:// || http:// on a string */
function removeProtocol(str){
  return str.replace(/(^\w+:|^)\/\//, "")
}

module.exports = {
  removeProtocol
};
