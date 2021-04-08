const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parameterSchema = new Schema({
  code: String,
  name: String,
  units: String
});

const Parameter = mongoose.model("Parameter", parameterSchema);

module.exports = Parameter;
