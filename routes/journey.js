const router = require('express').Router();

const journeyController = require('../controllers/journey');

router.get('/journeys', journeyController.getAllFlights);

router.get('/journeys/times', journeyController.getAllFlightsTimes);

router.get('/journeys/prices', journeyController.getAllFlightsPrices);

router.get('/journey/price/:journeyId', journeyController.getFlightPrice);

router.get('/journey/edit/:journeyId', journeyController.getUpdateFlight);

router.post('/journey/edit/:journeyId', journeyController.postUpdateFlight);

router.post('/journey/delete', journeyController.postDeleteFlight);

module.exports = router;
