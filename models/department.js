const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  areas: [{type: Schema.Types.ObjectId, ref: "Area"}]
});

const Department = mongoose.model("Department", DepartmentSchema);

module.exports = Department;
