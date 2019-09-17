const Flight = require('../models/flight');

// Display all flights available
exports.getAllFlights = (req, res, next) => {
  Flight.find()
    .then(users => {
      console.log(users);
      res.status(200).send(JSON.stringify(users));
    })
    .catch(err => {
      console.log(err);
    });
};

// create new flight
exports.postCreateNewFlight = (req, res, next) => {
  const flightName = req.body.flight.name;
  const flightID = req.body.flight.flightID;
  const flightManagementOperator = req.body.flight.management.operator;
  const flightManagementServices = req.body.flight.management.services;
  const flightManagmentLocation = req.body.flight.management.location;
  const flightPrice = req.body.price;
  const flightTimeDeparture = req.body.time.departureTimes;
  const flightTimeArrival = req.body.time.arrivalTimes;
  // const flightBooking
  const flight = new Flight({
    flight: {
      name: flightName,
      flightID: flightID,
      management: {
        operator: flightManagementOperator,
        services: flightManagementServices,
        location: flightManagmentLocation
      }
    },
    price: flightPrice,
    time: {
      departureTimes: flightTimeDeparture,
      arrivalTimes: flightTimeArrival
    },
    booking: {
      bookings: []
    }
  });
};

// Display all flight times
exports.getAllFlightsTimes = (req, res, next) => {
  Flight.find()
    .select('flight.flightID time')
    .populate('booking')
    .then(flights => {
      console.log(flights);
      res.status(200).send(JSON.stringify(flights));
    })
    .catch(err => console.log(err));
};

// Display all flight prices
exports.getAllFlightsPrices = (req, res, next) => {
  Flight.find()
    .select('flight.flightID price')
    .populate('booking')
    .then(flights => {
      console.log(flights);
      res.status(200).send(JSON.stringify(users));
    })
    .catch(err => console.log(err));
};

// Display a single flight price
exports.getFlightPrice = (req, res, next) => {
  const flightId = req.params.flightId;
  Flight.findById(flightId)
    .select('flight.flightID price')
    .populate('booking')
    .then(flight => {
      if (!flight) {
        res.status(200).send('No such flight exist');
      } else {
        console.log(flight);
        res.status(200).send(JSON.stringify(flight));
      }
    })
    .catch(err => {
      console.log(err);
    });
};

// Get a flight to update
exports.getUpdateFlight = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.status(404).send('Can not edit');
  }
  const flightId = req.params.flightID;
  Flight.findById(flightId)
    .then(flight => {
      if (!flight) {
        console.log('No such flight exist');
        res.status(200).send('No such flight exist');
      } else {
        console.log(flight);
        res.status(200).send(JSON.stringify(flight));
      }
    })
    .catch(err => console.log(err));
};

// Make new updates to a flight
exports.postUpdateFlight = (req, res, next) => {
  const newFlightName = req.body.flight.name;
  const newFlightID = req.body.flight.flightID;
  const newFlightManagementOperator = req.body.flight.management.operator;
  const newFlightManagementServices = req.body.flight.management.services;
  const newFlightManagmentLocation = req.body.flight.management.location;
  const newFlightPrice = req.body.price;
  const newFlightTimeDeparture = req.body.time.departureTimes;
  const newFlightTimeArrival = req.body.time.arrivalTimes;

  Flight.findById(flightId)
    .then(flight => {
      flight.flight.name = newFlightName;
      flight.flight.flightID = newFlightID;
      flight.flight.management.operator = newFlightManagementOperator;
      flight.flight.management.services = newFlightManagementServices;
      flight.flight.management.location = newFlightManagmentLocation;
      flight.flight.price = newFlightPrice;
      flight.flight.time.departureTimes = newFlightTimeDeparture;
      flight.flight.time.arrivalTimes = newFlightTimeArrival;
      return flight.save();
    })
    .then(flight => {
      console.log('Flight details updated');
      res.status(200).send(JSON.stringify(flight));
    })
    .catch(err => console.log(err));
};

// Delete a single flight
exports.postDeleteFlight = (req, res, next) => {
  const flightId = req.params.flightId;
  User.findByIdAndRemove(flightId)
    .then(flights => {
      console.log('Flight deleted');
      console.log(flights);
      return res.status(200).send('User deleted');
    })
    .catch(err => {
      console.log(err);
    });
};
