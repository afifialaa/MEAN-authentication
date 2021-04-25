function isAdmin(req, res, next){
    if(req.role === 'admin'){
        next();
    }else{
        return res.status(401).json({msg: 'User is not an admin'});
    }
}

module.exports = {
    isAdmin
};