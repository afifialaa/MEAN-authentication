const jwt = require('jsonwebtoken');

// Return JWT
function generateToken(email) {
	return jwt.sign({ email: email }, process.env.SECRET_KEY);
}

function verifyToken(req, res, next){
	const authHeader = req.headers["authorization"]
    const token = authHeader.split(' ')[1];

	jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
		if (err) {
            return res.json({msg: "missing or invalid jwt"});
        }
        else{
            console.log('valid token');
            next();
        }
    })
}

module.exports = {
	generateToken,
	verifyToken
};