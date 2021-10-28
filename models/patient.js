const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: {type: Number},
  dateOfBirth: {type: String},
  gender: {type: String},
  phone: String,
  email: String,
  adress: String,
  date: { type: Date, default: Date.now },
  orders: [{type: Schema.Types.ObjectId, ref: "Order"}]
});

const Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;
