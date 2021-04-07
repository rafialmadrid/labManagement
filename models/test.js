const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestSchema = new Schema({
  testCatalogueId: {type: Schema.Types.ObjectId, ref:"TestCatalogue"},
  type: String,
  delivery: Date
  
});

const Test = mongoose.model("Test", TestSchema);

module.exports = Test;
