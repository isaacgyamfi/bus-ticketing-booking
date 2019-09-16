const router = require('express').Router();

const userController = require('../controllers/user');

router.get('/add-user', userController.getNewUser);

router.post('/add-user', userController.postNewUser);

router.get('/user/:userId', userController.getUser);

router.get('/edit-user/:userId', userController.getEditUser);

router.post('/edit-user/:userId', userController.postEditUser);

router.get('/users', userController.getUsers);

router.post('/delete-user/', userController.postDeleteUser);

module.exports = router;
