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

const MenRedModel = mongoose.model("menReddata", manSchema);

module.exports = {
 MenRedModel,
};
