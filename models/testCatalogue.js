const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testCatalogueSchema = new Schema({
  code: String,
  name: String,
  days: Number,
  price: Number,
  parameters: [{type: Schema.Types.ObjectId, ref: "Parameter"}],
  area: {type: Schema.Types.ObjectId, ref: "Area"},
  /*indication: {type: Schema.Types.ObjectId, ref: "Indication"},
  method: {type: Schema.Types.ObjectId, ref: "Method"},
  department: {type: Schema.Types.ObjectId, ref: "Department"},*/

});

const TestCatalogue = mongoose.model("TestCatalogue", testCatalogueSchema);

module.exports = TestCatalogue;
