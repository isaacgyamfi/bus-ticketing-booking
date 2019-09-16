const router = require('express').Router();

const bookingController = require('../controllers/booking');

router.get('/all-bookings', bookingController.getAllBookings);

router.get('/all-bookings/:userId', bookingController.getAllUserBookings);

router.post('/create-user-booking', bookingController.postUserBooking);
