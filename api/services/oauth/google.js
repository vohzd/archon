const { OAuth2Client }                     = require("google-auth-library");
const client                               = new OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, "http://localhost:3000/connect/google")

async function generateGoogleAuthURL(){
  console.log("service: generateGoogleAuthURL");
  // we need to send users to a google webpage in order for then to grant us permission...

  console.log(client);
  return client.generateAuthUrl({
    access_type: "offline",
    scope: "https://www.googleapis.com/auth/youtube"
  });
}

async function completeGoogleAuth(token){
  console.log("service: completeGoogleAuth");
  try {
    const { tokens } = await client.getToken(token);
    // save the tokens in memory so this server can perform requests
    console.log(tokens);
    client.setCredentials(tokens);

    // Send them back to wherever so we can do other stuff with it.
    return tokens;
  }
  catch (e){
    console.log("FAIL");
    console.log(e);
  }

  return false;
}


module.exports = {
  generateGoogleAuthURL,
  completeGoogleAuth
}
