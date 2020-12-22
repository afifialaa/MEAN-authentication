const express = require('express');
const router = express.Router();

<<<<<<< HEAD
=======
const jwtAuth = require('../middleware/jwtAuth');

>>>>>>> fab46ef8cd7eed10b13491b10fc7ccd6b975996e
const userController = require('../controllers/user.controller');

router.post('/signup', userController.signup);
router.post('/login', userController.login);

router.get('/', userController.homePage);

module.exports = router;

