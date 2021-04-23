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
            return res.json({err: 'Email is already registered'});
        }
        const token = jwtAuth.generateToken(user.email);
        return res.json({msg: 'User was created successfully'});
    })
}

function login(req, res) {
    let userObj = {
        email: req.body.email,
        password: req.body.password
    }

    console.log(userObj);

    User.findOne({ email: userObj.email }, (err, user) => {
        if (err) {
            return res.json({err : 'Database error'});
        };

        if (user === null) {
            return res.json({err: 'User does not exist'});
        };

        if (user === null) {
            return res.json({err: 'User does not exist'});
        } else {
            bcrypt.compare(userObj.password, user.password, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.json({msg: 'Failed to auth user'});
                }

                if (result == true) {
                    const token = jwtAuth.generateToken(user.email);
                    return res.json({msg: 'User logged in'});
                } else if (result == false) {
                    return res.json({err: 'Wrong password'});
                }
            })
        }
    });;
}

function homePage(req, res) {
    return res.render('index', {err : ''});
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