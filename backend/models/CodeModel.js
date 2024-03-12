// eslint-disable-next-line no-undef
const mongoose = require("mongoose");

const codeSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// eslint-disable-next-line no-undef
module.exports = mongoose.model("Code", codeSchema);
