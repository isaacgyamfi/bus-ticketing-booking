const router = require('express').Router();

const journeyController = require('../controllers/journey');

router.get('/journeys', journeyController.getAllJourneys);

router.get('/journeys/times', journeyController.getAllJourneysTimes);

router.get('/journeys/prices', journeyController.getAllJourneysPrices);

router.get('/journey/price/:journeyId', journeyController.getJourneyPrice);

router.get('/journey/edit/:journeyId', journeyController.getUpdateJourney);

router.post('/journey/edit/:journeyId', journeyController.postUpdateJourney);

router.post('/journey/delete', journeyController.postDeleteJourney);

module.exports = router;
