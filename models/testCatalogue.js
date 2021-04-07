const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testCatalogueSchema = new Schema({
  code: String,
  name: String,
  department: String,
  days: Number,
  price: Number,
  parameters: [{type: Schema.Types.ObjectId, ref: "Parameter"}]
});

const TestCatalogue = mongoose.model("TestCatalogue", testCatalogueSchema);

module.exports = TestCatalogue;
