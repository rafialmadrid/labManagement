const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IndicationSchema = new Schema({
  code: { type: String, required: true }, 
  indication: { type: String, required: true }, 
});

const Indication = mongoose.model("Indication", IndicationSchema);

module.exports = Indication;
