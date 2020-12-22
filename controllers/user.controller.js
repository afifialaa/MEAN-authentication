<<<<<<< HEAD
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwtAuth = require('../authentication/jwt.auth');

function signup(req, res) {
=======

function signup(req, res){
>>>>>>> fab46ef8cd7eed10b13491b10fc7ccd6b975996e
    let userObj = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    }

    let user = new User(userObj);

    user.save((err, user) => {
        if (err) {
<<<<<<< HEAD
            return res.render('index', {
                err: 'Failed to create user'
            });
        }

        const token = jwtAuth.generateToken(user.email);
        return res.render('admin', {
=======
            if (err.name === 'MongoError' && err.code === 11000) {
                console.log('duplicate key error');
                return res.json({ msg: 'duplicate key error' });
            }
        }

        const token = jwt.sign({user: user.email}, secret_key);
        return res.json({ 
            msg: 'user was saved',
>>>>>>> fab46ef8cd7eed10b13491b10fc7ccd6b975996e
            token: token,
        });
    })
}

<<<<<<< HEAD
function login(req, res) {
=======
function signin(req, res){
>>>>>>> fab46ef8cd7eed10b13491b10fc7ccd6b975996e
    let userObj = {
        email: req.body.email,
        password: req.body.password
    }

    User.findOne({ email: userObj.email }, (err, user) => {
        if (err) {
            console.log(err)
<<<<<<< HEAD
            return res.render('error', { err: 'mongoose failed' });
        };

        if (user === null) {
            return res.render('error', { err: 'email does not exist' });
=======
            return res.json({err : 'mongoose failed'});
        };

        if (user === null) {
            return res.json({ err: 'email does not exist' });
>>>>>>> fab46ef8cd7eed10b13491b10fc7ccd6b975996e
        } else {
            bcrypt.compare(userObj.password, user.password, (err, result) => {
                if (err) {
                    console.log(err);
<<<<<<< HEAD
                    return res.render('error', { err: 'failed to authenticate user' });
                }

                if (result == true) {
                    const token = jwtAuth.generateToken(user.email);
                    return res.render('admin');
                } else if (result == false) {
                    return res.render('error', { err: 'wrong password or email' });
=======
                    return res.json({ err: 'failed to authenticate user' });
                }

                if (result == true) {
                    const token = jwt.sign({ user: user.email }, secret_key);
                    return res.json({
                        token: token
                    });
                } else if (result == false) {
                    return res.json({ err: 'wrong password or email' });
>>>>>>> fab46ef8cd7eed10b13491b10fc7ccd6b975996e
                }
            })
        }
    });;
<<<<<<< HEAD
}

function homePage(req, res) {
    return res.render('index', {err : ''});
}

function someApiCall(req, res) {
    res.json({ msg: 'hello user' });
=======
}

function someApiCall(req, res){
    res.json({msg:'hello user'});
>>>>>>> fab46ef8cd7eed10b13491b10fc7ccd6b975996e
}

module.exports = {
    signup,
    login,
    someApiCall,
    homePage,
}