const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResultSchema = new Schema({
  value: Number,
  text: String,
  
});

const Result = mongoose.model("Result", ResultSchema);

module.exports = Result;
