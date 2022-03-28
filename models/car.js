const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  slot: {
    type: Number,
    required: false,
  },
  registrationNumber: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Car = mongoose.model("car", CarSchema);
