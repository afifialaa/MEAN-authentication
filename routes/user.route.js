const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);

router.get('/', (req, res)=>{
    res.render('pages/index');
})

module.exports = router;

