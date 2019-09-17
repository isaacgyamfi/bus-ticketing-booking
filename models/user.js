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

userSchema.methods.addBooking = function(flightBook) {
  const flightBookingIndex = this.booking.bookings.findIndex(fb => {
    fb.bookingId.toString() === flightBook._id.toString();
  });
  let newNumberOfBookings = 1;
  const updatedFlightBookings = [...this.booking.bookings];

  if (flightBookingIndex >= 0) {
    newNumberOfBookings =
      this.booking.bookings[flightBookingIndex].numberOfBookings + 1;
    updatedFlightBookings[
      flightBookingIndex
    ].numberOfBookings = newNumberOfBookings;
  } else {
    updatedFlightBookings.push({
      bookingId: flightBook._id,
      numberOfBookings: newNumberOfBookings
    });
  }
  const updatedBooking = {
    bookings: updatedFlightBookings
  };
  this.booking = updatedBooking;
  return this.save();
};

module.exports = mongoose.model('User', userSchema);
