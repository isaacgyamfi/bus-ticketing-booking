const User = require('../models/user');

exports.getNewUser = (req, res) => {};

// create a new user and store in db
exports.postNewUser = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  // create a new instance of a user
  const user = new User({ name: name, email: email, password: password });
  user
    .save()
    .then(result => {
      console.log('New user created');
    })
    .catch(err => {
      console.log(err);
    });
};

// get all users stored in db
exports.getUsers = (req, res) => {
  User.find()
    .then(users => {
      console.log(users);
      res.status(200).send(JSON.stringify(users));
    })
    .catch(err => {
      console.log(err);
    });
};

// get a single user stored in db
exports.getUser = (req, res) => {
  const userId = req.params.userId;
  User.findById(userId)
    .then(user => {
      console.log(user);
      res.status(200).send(JSON.stringify(user));
    })
    .catch(err => {
      console.log(err);
    });
};

// get to edit a user
// make sure you add the key '?edit=true'
exports.getEditUser = (req, res) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.status(404).send('Can not edit');
  }
  const userId = req.params.userId;
  User.findById(userId)
    .then(user => {
      if (!user) {
        return res.status(200).send('User can not be found');
      }
      res.status(200).send(JSON.stringify(user));
    })
    .catch(err => console.log(err));
};

// update a single user
exports.postEditUser = (req, res) => {
  const userId = req.body.userId;
  const newName = req.body.name;
  const newEmail = req.body.email;
  const newPassword = req.body.password;

  User.findById(userId)
    .then(user => {
      user.name = newName;
      user.email = newEmail;
      user.password = newPassword;
      return user.save();
    })
    .then(result => {
      console.log('User profile updated');
      res.status(200).send(JSON.stringify(user));
    })
    .catch(err => console.log(err));
};

exports.postDeleteUser = (req, res) => {
  const userId = req.body.userId;
  User.findByIdAndRemove(userId)
    .then(() => {
      console.log('User deleted');
      res.status(200).send('User deleted');
    })
    .catch(err => {
      console.log(err);
    });
};
