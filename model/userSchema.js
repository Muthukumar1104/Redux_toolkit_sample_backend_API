const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("customer", customerSchema);
