const jwt = require('jsonwebtoken');

// Store safely
const secret_key = 'secret_key';

module.exports = function(req, res, next){
    const token = req.token;
	jwt.verify(token, secret_key, (err, decoded) => {
		if (err) {
            console.log(err);
            return res.json('unauthorized access');
        }
        else{
            console.log('valid token');
            console.log(decoded);
            next();
        }
        
    })
}