
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
            if (err.name === 'MongoError' && err.code === 11000) {
                console.log('duplicate key error');
                return res.json({ msg: 'duplicate key error' });
            }
        }

        const token = jwt.sign({user: user.email}, secret_key);
        return res.json({ 
            msg: 'user was saved',
            token: token,
        });
    })
}

function signin(req, res){
    let userObj = {
        email: req.body.email,
        password: req.body.password
    }

    User.findOne({ email: userObj.email }, (err, user) => {
        if (err) {
            console.log(err)
            return res.json({err : 'mongoose failed'});
        };

        if (user === null) {
            return res.json({ err: 'email does not exist' });
        } else {
            bcrypt.compare(userObj.password, user.password, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.json({ err: 'failed to authenticate user' });
                }

                if (result == true) {
                    const token = jwt.sign({ user: user.email }, secret_key);
                    return res.json({
                        token: token
                    });
                } else if (result == false) {
                    return res.json({ err: 'wrong password or email' });
                }
            })
        }
    });;
}

function someApiCall(req, res){
    res.json({msg:'hello user'});
}

module.exports = {
    signup,
    signin,
    someApiCall
}