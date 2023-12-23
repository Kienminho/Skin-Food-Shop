const mongoose = require("mongoose");

const CapacityPriceSchema = new mongoose.Schema({
  capacity: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },
});

const CapacityPrice = mongoose.model("CapacityPrice", CapacityPriceSchema);
module.exports = CapacityPrice;
