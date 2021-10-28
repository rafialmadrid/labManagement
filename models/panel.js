const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PanelSchema = new Schema({
  code: String,
  name: { type: String, required: true }, 
  department: String,
  days: Number,
  price: Number, 
  testCatalogueId: {type: Schema.Types.ObjectId, ref:"TestCatalogue"},
  parameters: [{type: Schema.Types.ObjectId, ref: "Parameter"}],
  indications: {type: Schema.Types.ObjectId, ref: "Indication"},
  method: {type: Schema.Types.ObjectId, ref: "Method"},
  department: {type: Schema.Types.ObjectId, ref: "Department"},
  area: {type: Schema.Types.ObjectId, ref: "Area"},
});

const Panel = mongoose.model("Panel", PanelSchema);

module.exports = Panel;
