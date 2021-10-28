const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parameterSchema = new Schema({
  code: String,
  name: String,
  units: String,
  valueTypes: [{type: Schema.Types.ObjectId, ref: "ValueType"}],
  area: {type: Schema.Types.ObjectId, ref: "Area"},
});

const Parameter = mongoose.model("Parameter", parameterSchema);

module.exports = Parameter;
