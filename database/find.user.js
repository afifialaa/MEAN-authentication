const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const secret_key = 'secret_key';

function findUser(res, userObj) {
    console.log(userObj);
    User.findOne({ email: userObj.email }, (err, user) => {
        //mongoose error
        if (err) console.log(err);

        if (user === null) {
            //wrong email
            res.json({ msg: 'email does not exist' });
        } else {
            bcrypt.compare(userObj.password, user.password, (err, result) => {
                if (err) {
                    console.log(err);
                    res.json({ msg: 'failed to authenticate user' });
                }

                console.log(result);

                //result: boolean
                if (result == true) {
                    //generate jwt
                    //generate token
                    const token = jwt.sign({ user: user.email }, secret_key);
                    res.json({
                        token: token,
                    });
                } else if (result == false) {
                    //passwords did not match
                    res.json({ msg: 'wrong password or email' });
                }
            })
        }
    });
}

module.exports = findUser;