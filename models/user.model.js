const mongoose = require('mongoose');
const bc = require('bcrypt');
const saltRounds = 10;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', function (next) {
    let user = this;

    bc.genSalt(saltRounds, function (err, salt) {
        if (err) return next(err);

        bc.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        })
    })
})

function handleE11000 (err, res, next) {
    if (err.name === 'MongoError' && err.code === 11000) {
        console.log('yeeeeeeeeeeeeeeesssssssssssssssss');
        next(new Error('There was a duplicate key error'));
    } else {
        next();
    }
};

//UserSchema.post('save', handleE11000);

const User = mongoose.model('User', UserSchema);

module.exports = User;