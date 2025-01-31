const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  newpassword: {
    type: String,
    require: true,
  },
  confirmpassword: {
    type: String,
    require: true,
  },
  cdate: {
    type: Date,
  },
});

module.exports = mongoose.model("users", authSchema);
