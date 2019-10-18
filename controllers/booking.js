const Booking = require('../models/booking');

// Get all bookings made
exports.getAllBookings = (req, res) => {
  Booking.find()
    .then(bookings => {
      console.log(bookings);
      res.status(200).send(JSON.stringify(bookings));
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postUserBooking = (req, res) => {
  const bookingDate = req.body.bookingDate;
  const journeyDepartureDate = req.body.journey.journeyDepartureDate;
  const journeyArrivalDate = req.body.journey.journeyArrivalDate;

  // create a new instance of a booking
  const booking = new Booking({
    bookingDate: bookingDate,
    journey: {
      journeyDeparture: journeyDepartureDate,
      journeyArrival: journeyArrivalDate
    }
  });
  booking
    .save()
    .then(result => {
      console.log('New booking created');
      res.status(200).send(JSON.stringify(result));
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getAllUserBookings = (req, res) => {};

exports.deleteBooking = (req, res) => {
  const bookingId = req.params.bookingId;
  User.findByIdAndRemove(bookingId)
    .then(bookings => {
      console.log('Booking deleted');
      console.log(bookings);
      return res.status(200).send('User deleted');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.deleteUserBooking = (req, res) => {};
