const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create avengerSchema
const avengerSchema = new mongoose.Schema({
  character: String,
  real_name: String,
  notes: String,
});

//create avengerModel
const avengerModel = mongoose.model("avengers", avengerSchema);

module.exports = avengerModel;
