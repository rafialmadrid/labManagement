const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestSchema = new Schema({
  type: String,
  delivery: Date,
  testCatalogueId: {type: Schema.Types.ObjectId, ref:"TestCatalogue"},
  results: [{type: Schema.Types.ObjectId, ref: "Result"}]
});

const Test = mongoose.model("Test", TestSchema);

module.exports = Test;
