const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  flight: {
    type: Object,
    flightId: String,
    required: true
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
