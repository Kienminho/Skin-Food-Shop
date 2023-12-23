const mongoose = require("mongoose");
const CapacityPrice = require("./CapacityPrice");
const ProductSchema = new mongoose.Schema({
  productCode: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  capacitiesAndPrices: [CapacityPrice.schema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    required: false,
  },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
