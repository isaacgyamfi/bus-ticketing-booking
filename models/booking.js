const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  // bookingId: {
  //   type: String,
  //   required: true
  // },
  // userId: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // },
  bookingDate: {
    type: Date,
    required: true,
    default: Date.now()
  },
  flight: {
    flightDeparture: {
      type: Date,
      required: true
    },
    flightArrival: {
      type: Date,
      required: true
    }
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
