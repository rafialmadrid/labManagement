const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResultSchema = new Schema({
  parameter: {type: Schema.Types.ObjectId, ref:"Parameter"},
  value: Number,
  text: String,

});

const Result = mongoose.model("Result", ResultSchema);

module.exports = Result;
