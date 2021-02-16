const {
  completeGoogleAuth,
  generateGoogleAuthURL
}                                 = require("./google.js");

async function generateAuthURL(website){
  console.log("service: oauth connect");

  let url;
  // add others to taste...
  if (website === "youtube"){
    // google basically has a billion services,
    // but we're just interested in this one for now
    console.log("a google website...");
    url = await generateGoogleAuthURL();
  }


  return url
}


async function completeAuth(website, token){
  console.log("service: completeAuth");
  console.log(website);
  console.log(token);

  // firstly, send it to the google api to let it know this server is in fact authorised
  const tokens = await completeGoogleAuth(token)

  // secondly, save it to disk in accounts.json
  console.log("save to disk here...");





}


module.exports = {
  generateAuthURL,
  completeAuth
}
