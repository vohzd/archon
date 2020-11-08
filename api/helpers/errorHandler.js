function errorHandler(res, e){
  console.log("ERROR RECEIVED !!");
  console.log(e)
  if (!e){
    return res.status(500).send({ "success": false, "error": "Server is having an issue" });
  }
  else {
    let message = "";

    if (e.message.includes("duplicate")){
      message = "Duplicate. Use a unique name!";
    }
    else {
      message = e.message;
    }
    return res.status(400).send({ "success": false, "error": message });
  }
}

module.exports = {
  errorHandler
}
