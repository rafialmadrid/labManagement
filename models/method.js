const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MethodSchema = new Schema({
  code: { type: String, required: true }, 
  name: { type: String, required: true }, 
});

const Method = mongoose.model("Method", MethodSchema);

module.exports = Method;
