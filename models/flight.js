const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
  flight: {
    type: Schema.Types.ObjectId,
    ref: 'Booking'
  },
  price: {
    type: Number,
    required: true
  },
  time: {
    departureTime: {
      type: new Date().setTime(),
      required: true
    },
    arrivalTime: {
      type: new Date().setTime()
    }
  }
});

module.exports = mongoose.model('Flight', flightSchema);
