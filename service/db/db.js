const Lot = require("../../models/parkingLots");
const Car = require("../../models/car");

async function writeLot(lotJson) {
  const lot = new Lot({
    size: lotJson.size,
    slots: lotJson.slots,
    availableSlots: lotJson.availableSlots,
    filledSlots: lotJson.filledSlots,
    timestamp: lotJson.timestamp,
  });

  await lot.save();
}

async function writeCar(carJson) {
  const car = new Car({
    slot: carJson.slot,
    registrationNumber: carJson.registrationNumber,
    color: carJson.color,
    timestamp:carJson.timestamp,
  });

  await car.save();
}

module.exports = {
  writeLot,
  writeCar,
};
