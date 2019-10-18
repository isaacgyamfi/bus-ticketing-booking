const Journey = require('../models/journey');

// Display all journeys available
exports.getAllJourneys = (req, res, next) => {
  Journey.find()
    .then(users => {
      console.log(users);
      res.status(200).send(JSON.stringify(users));
    })
    .catch(err => {
      console.log(err);
    });
};

// create new journey
exports.postCreateNewJourney = (req, res, next) => {
  const journeyName = req.body.journey.name;
  const journeyID = req.body.journey.journeyID;
  const journeyManagementOperator = req.body.journey.management.operator;
  const journeyManagementServices = req.body.journey.management.services;
  const journeyManagmentLocation = req.body.journey.management.location;
  const journeyPrice = req.body.price;
  const journeyTimeDeparture = req.body.time.departureTimes;
  const journeyTimeArrival = req.body.time.arrivalTimes;
  // const journeyBooking
  const journey = new Journey({
    journey: {
      name: journeyName,
      journeyID: journeyID,
      management: {
        operator: journeyManagementOperator,
        services: journeyManagementServices,
        location: journeyManagmentLocation
      }
    },
    price: journeyPrice,
    time: {
      departureTimes: journeyTimeDeparture,
      arrivalTimes: journeyTimeArrival
    },
    booking: {
      bookings: []
    }
  });
};

// Display all journey times
exports.getAllJourneysTimes = (req, res, next) => {
  Journey.find()
    .select('journey.journeyID time')
    .populate('booking')
    .then(journeys => {
      console.log(journeys);
      res.status(200).send(JSON.stringify(journeys));
    })
    .catch(err => console.log(err));
};

// Display all journey prices
exports.getAllJourneysPrices = (req, res, next) => {
  Journey.find()
    .select('journey.journeyID price')
    .populate('booking')
    .then(journeys => {
      console.log(journeys);
      res.status(200).send(JSON.stringify(users));
    })
    .catch(err => console.log(err));
};

// Display a single journey price
exports.getJourneyPrice = (req, res, next) => {
  const journeyId = req.params.journeyId;
  Journey.findById(journeyId)
    .select('journey.journeyID price')
    .populate('booking')
    .then(journey => {
      if (!journey) {
        res.status(200).send('No such journey exist');
      } else {
        console.log(journey);
        res.status(200).send(JSON.stringify(journey));
      }
    })
    .catch(err => {
      console.log(err);
    });
};

// Get a journey to update
exports.getUpdateJourney = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.status(404).send('Can not edit');
  }
  const journeyId = req.params.journeyID;
  Journey.findById(journeyId)
    .then(journey => {
      if (!journey) {
        console.log('No such journey exist');
        res.status(200).send('No such journey exist');
      } else {
        console.log(journey);
        res.status(200).send(JSON.stringify(journey));
      }
    })
    .catch(err => console.log(err));
};

// Make new updates to a journey
exports.postUpdateJourney = (req, res, next) => {
  const newJourneyName = req.body.journey.name;
  const newJourneyID = req.body.journey.journeyID;
  const newJourneyManagementOperator = req.body.journey.management.operator;
  const newJourneyManagementServices = req.body.journey.management.services;
  const newJourneyManagmentLocation = req.body.journey.management.location;
  const newJourneyPrice = req.body.price;
  const newJourneyTimeDeparture = req.body.time.departureTimes;
  const newJourneyTimeArrival = req.body.time.arrivalTimes;

  Journey.findById(journeyId)
    .then(journey => {
      journey.journey.name = newJourneyName;
      journey.journey.journeyID = newJourneyID;
      journey.journey.management.operator = newJourneyManagementOperator;
      journey.journey.management.services = newJourneyManagementServices;
      journey.journey.management.location = newJourneyManagmentLocation;
      journey.journey.price = newJourneyPrice;
      journey.journey.time.departureTimes = newJourneyTimeDeparture;
      journey.journey.time.arrivalTimes = newJourneyTimeArrival;
      return journey.save();
    })
    .then(journey => {
      console.log('Journey details updated');
      res.status(200).send(JSON.stringify(journey));
    })
    .catch(err => console.log(err));
};

// Delete a single journey
exports.postDeleteJourney = (req, res, next) => {
  const journeyId = req.params.journeyId;
  User.findByIdAndRemove(journeyId)
    .then(journeys => {
      console.log('Journey deleted');
      console.log(journeys);
      return res.status(200).send('User deleted');
    })
    .catch(err => {
      console.log(err);
    });
};
