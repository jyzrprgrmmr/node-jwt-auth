const jwtAuth = require('./jwtAuth');

module.exports = (req,res,next) => {
    const token = req.get('Authorization');
    const verified = jwtAuth.jwtVerify(token)

    if(!verified){
        res.sendStatus(401);
        return
    }
    next();
}