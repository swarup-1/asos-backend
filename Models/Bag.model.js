const mongoose = require("mongoose");

const bagSchema = mongoose.Schema(
  {
    image: String,
    brand: String,
    product: String,
    price: Number,
    strike: Number,
    discount: String,
    size: String
  },
  {
    versionKey: false,
  }
);

const BagModel = mongoose.model("bagdata", bagSchema);

module.exports = {
  BagModel,
};
