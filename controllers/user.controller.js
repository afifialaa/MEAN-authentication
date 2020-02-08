const saveUser = require('../database/save.user');
const findUser = require('../database/find.user');

function signup(req, res){
    console.log('#signup');
    let user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    }

    saveUser(res, user);
}

function signin(req, res){
    let user = {
        email: req.body.email,
        password: req.body.email
    }

    findUser(res, user);
}

module.exports = {
    signup,
    signin
}