const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
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

module.exports = mongoose.model('User', userSchema);
