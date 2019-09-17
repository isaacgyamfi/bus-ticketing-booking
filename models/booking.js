const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  bookingDate: {
    type: Date,
    required: true,
    default: Date.now()
  },
  flight: {
    flightId: {
      type: Schema.Types.ObjectId,
      ref: 'Flight',
      required: true
    },
    flightConfirmation: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
