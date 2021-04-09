const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  type: String,
  subtotal: {type: Number, required: true},
  discount: Number,
  iva: Number,
  tax: Number,
  total: {type: Number, required: true},
  charge: Number,
  branch: String,
  date: { type: Date, default: Date.now },
  tests: [{type: Schema.Types.ObjectId, ref: "Test"}],
  patient: {type: Schema.Types.ObjectId, ref: "Patient"}
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
