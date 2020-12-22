const express = require('express');
const router = express.Router();
const jwtAuth = require('../middleware/jwtAuth');

const userController = require('../controllers/user.controller');

router.post('/signup', userController.signup);
router.post('/login', userController.login);

router.get('/', userController.homePage);

module.exports = router;

