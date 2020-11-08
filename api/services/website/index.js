const WebsiteModel                           = require("../../models/website.js");

async function createWebsite(payload){
  let Website = new WebsiteModel({
    ...payload
  });
  return await Website.save();
}

async function deleteWebsite(id){
  const Website = await WebsiteModel.findByIdAndRemove({
    "_id": id
  });
  return await Website.remove();
}

async function getWebsites(query){
  return await WebsiteModel.find(query);
}

async function updateWebsite(id, body){
  return await WebsiteModel.findOneAndUpdate({ "_id": id}, { ...body }, { upsert: true });
}

module.exports = {
  createWebsite,
  deleteWebsite,
  getWebsites,
  updateWebsite
};
