const mongoose = require("mongoose");

const ParkingSchema = new mongoose.Schema({
  slots: {
    type: Number,
    required: true,
  },
  availableSlots: {
    type: Number,
    required: true,
  },
  filledSlots: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = ParkingLot = mongoose.model("parkingLot", ParkingSchema);
