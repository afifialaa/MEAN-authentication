const User = require('../models/user.model');

function saveUser(res, userObj) {
    console.log('#saveuser');
    let user = new User(userObj);

    user.save((err, user) => {
        if (err) {
            if (err.name === 'MongoError' && err.code === 11000) {
                console.log('duplicate key error');
                res.json({ msg: 'duplicate key error' });
            }
        }
        //generate token and log user in
        res.send({ msg: 'user was saved' });
    })
}

module.exports = saveUser;