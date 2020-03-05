const User = require('../models/user.model');

//json web token
const jwt = require('jsonwebtoken');
const secret_key = 'secret_key';

function saveUser(res, userObj) {
    let user = new User(userObj);

    user.save((err, user) => {
        if (err) {
            if (err.name === 'MongoError' && err.code === 11000) {
                console.log('duplicate key error');
                res.json({ msg: 'duplicate key error' });
            }
        }
        //generate token
        const token = jwt.sign({user: user.email}, secret_key);
        res.send({ 
            msg: 'user was saved',
            token: token,
        });
    })
}

module.exports = saveUser;