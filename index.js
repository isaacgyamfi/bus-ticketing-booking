const express = require('express');
const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// importing the routes
const userRoutes = require('./routes/user');
// const bookingRoutes = require('./routes/booking');
// const adminRoutes = require('./routes/admin');
const errorController = require('./controllers/error');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

// routes middlewares
app.use(userRoutes);
// app.use(bookingRoutes);
// app.use('/admin', adminRoutes);

// middleware for errors
app.use(errorController.get404Error);

// storing the port number in a variable
const port = 5000;

mongoose
  .connect(
    'mongodb+srv://isaacgyamfi177:bohyeba123@cluster0-ivlzn.mongodb.net/airline?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(result => {
    app.listen(port, () => console.log('Connected!'));
  })
  .catch(err => console.log(err));
