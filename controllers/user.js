const User = require('../models/user');

exports.getNewUser = (req, res) => {};

exports.postNewUser = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
};

exports.getUsers = (req, res) => {
  res.status(200).send('hello');
};

exports.getEditUser = (req, res) => {};

exports.postEditUser = (req, res) => {};
