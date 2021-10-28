const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AreaSchema = new Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  department: {type: Schema.Types.ObjectId, ref: "Department"},
});

const Area = mongoose.model("Area", AreaSchema);

module.exports = Area;
