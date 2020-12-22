const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwtAuth = require('../authentication/jwt.auth');

function signup(req, res){
    let userObj = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    }

    let user = new User(userObj);

    user.save((err, user) => {
        if (err) {
            return res.render('index', {err: 'Failed to create user'});
        }
        const token = jwtAuth.generateToken(user.email);
        return res.render('admin', {token: token});
    })
}

function login(req, res) {
    let userObj = {
        email: req.body.email,
        password: req.body.password
    }

    User.findOne({ email: userObj.email }, (err, user) => {
        if (err) {
            console.log(err)
            return res.render('error', { err: 'mongoose failed' });
        };

        if (user === null) {
            return res.render('error', { err: 'email does not exist' });
        };

        if (user === null) {
            return res.json({ err: 'email does not exist' });
        } else {
            bcrypt.compare(userObj.password, user.password, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.render('error', { err: 'failed to authenticate user' });
                }

                if (result == true) {
                    const token = jwtAuth.generateToken(user.email);
                    return res.render('admin');
                } else if (result == false) {
                    return res.render('error', { err: 'wrong password or email' });
                }
            })
        }
    });;
}

function homePage(req, res) {
    return res.render('index', {err : ''});
}

function someApiCall(req, res) {
    res.json({ msg: 'hello user' });
}

function someApiCall(req, res){
    res.json({msg:'hello user'});
}

module.exports = {
    signup,
    login,
    someApiCall,
    homePage,
}