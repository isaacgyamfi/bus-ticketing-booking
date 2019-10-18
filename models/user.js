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

userSchema.methods.addBooking = function(journeyBook) {
  const journeyBookingIndex = this.booking.bookings.findIndex(fb => {
    fb.bookingId.toString() === journeyBook._id.toString();
  });
  let newNumberOfBookings = 1;
  const updatedJourneyBookings = [...this.booking.bookings];

  if (journeyBookingIndex >= 0) {
    newNumberOfBookings =
      this.booking.bookings[journeyBookingIndex].numberOfBookings + 1;
    updatedJourneyBookings[
      journeyBookingIndex
    ].numberOfBookings = newNumberOfBookings;
  } else {
    updatedJourneyBookings.push({
      bookingId: journeyBook._id,
      numberOfBookings: newNumberOfBookings
    });
  }
  const updatedBooking = {
    bookings: updatedJourneyBookings
  };
  this.booking = updatedBooking;
  return this.save();
};

module.exports = mongoose.model('User', userSchema);
