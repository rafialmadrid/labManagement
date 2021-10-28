const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
  name: { type: String, required: true }, 
});

const Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = Doctor;
