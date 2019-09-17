const router = require('express').Router();

const flightController = require('../controllers/flight');

router.get('/flights', flightController.getAllFlights);

router.get('/flights/times', flightController.getAllFlightsTimes);

router.get('/flights/prices', flightController.getAllFlightsPrices);

router.get('/flight/price/:flightId', flightController.getFlightPrice);

router.get('/flight/edit/:flightId', flightController.getUpdateFlight);

router.post('/flight/edit/:flightId', flightController.postUpdateFlight);

router.post('/flight/delete', flightController.postDeleteFlight);

module.exports = router;
