

const mongoose = require("mongoose");

const manSchema = mongoose.Schema(
  {
    image: String,
    brand: String,
    product: String,
    price: Number,
    strike: Number,
    discount: String,
  },
  {
    versionKey: false,
  }
);

const MenGreenModel = mongoose.model("menGreendata", manSchema);

module.exports = {
  MenGreenModel,
};
