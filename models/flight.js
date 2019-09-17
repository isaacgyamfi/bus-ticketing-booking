const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
  flight: {
    name: {
      type: String,
      required: true
    },
    flightID: {
      type: String,
      required: true
    },
    management: {
      operator: {
        type: String,
        required: true
      },
      services: {
        type: [String],
        required: false
      },
      location: {
        type: String,
        required: true
      }
    }
  },
  price: {
    type: Number,
    required: true
  },
  time: {
    departureTimes: {
      type: Date,
      required: true
    },
    arrivalTimes: {
      type: Date,
      required: true
    }
  },
  booking: {
    bookings: [
      {
        bookingId: {
          type: Schema.Types.ObjectId,
          ref: 'Booking',
          required: true
        },
        numberOfBookings: { type: Number, required: true }
      }
    ]
  }
});

module.exports = mongoose.model('Flight', flightSchema);
