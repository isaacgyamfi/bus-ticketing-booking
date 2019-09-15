const router = require('express').Router();

const userController = require('../controllers/user');

router.get('/add-user', userController.getNewUser);

router.post('/add-user', userController.postNewUser);

router.get('/user/:userId', userController.getEditUser);

router.post('/user/:userId', userController.postEditUser);

router.get('/users', userController.getUsers);

module.exports = router;
