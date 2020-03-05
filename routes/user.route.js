const express = require('express');
const router = express.Router();

const jwtAuth = require('../middleware/jwtAuth');

const jwt = require('jsonwebtoken');

// Store safely
const secret_key = 'secret_key';

const userController = require('../controllers/user.controller');

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);

// Testing route
router.get('/test', jwtAuth, userController.someApiCall);

router.get('/', (req, res)=>{
    res.render('pages/index');
})

module.exports = router;

