const User = require('../models/user.model');
const bcrypt = require('bcrypt');

function findUser(res, userObj){
    User.findOne({email:userObj.email}, (err, user)=>{
        //mongoose error
        if(err) console.log(err);
        
        if(user === null){
            //wrong email
            res.json({msg: 'email does not exist'});
        }else{
            bcrypt.compare(userObj.password, user.password, (err, result)=>{
                if(err){
                    console.log(err);
                    res.json({msg: 'failed to authenticate user'});
                }

                //result: boolean
                if(result == true){
                    //generate jwt
                    //const jwtoken = token.generateToken(user); 
                    res.json({
                        email: user.email
                    });
                }else if(result == false){
                    //passwords did not match
                    res.json({msg:'wrong password or email'});
                }
            })
        }
    });
}

module.exports = findUser;