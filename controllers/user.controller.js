const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwtAuth = require('../authentication/jwt.auth');

function signup(req, res){
    let userObj = {
        email: req.body.email,
        password: req.body.password
    }

    let user = new User(userObj);

    user.save((err, user) => {
        if (err) {
            console.log(err);
            return res.status(403).json({msg: 'Email is already registered'});
        }
        const token = jwtAuth.generateToken(user.email);
        return res.status(201).json({token: token});
    })
}

function login(req, res) {
    let userObj = {
        email: req.body.email,
        password: req.body.password
    }

    User.findOne({ email: userObj.email }, (err, user) => {
        if (err) {
            return res.json({msg : 'Database error'});
        };

        if (user === null) {
            return res.status(404).json({msg: 'User does not exist'});
        };

        if (user === null) {
            return res.status(404).json({msg: 'User does not exist'});
        } else {
            bcrypt.compare(userObj.password, user.password, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(403).json({msg: 'Failed to auth user'});
                }

                if (result == true) {
                    const token = jwtAuth.generateToken(user.email);
                    return res.json({token: token});
                } else if (result == false) {
                    return res.status(403).json({msg: 'Wrong password'});
                }
            })
        }
    });;
}


module.exports = {
    signup,
    login,
}