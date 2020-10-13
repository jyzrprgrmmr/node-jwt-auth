const jwt = require('jsonwebtoken');
const fs = require('fs');

module.exports = {
    jwtSign: (email) =>{
        var payload = {email: email};
        var privKey = fs.readFileSync('./config/priv.key', 'utf-8');
        var signOptions = {
            expiresIn:'12h',
            algorithm: 'RS256'
        };
        var token = jwt.sign(payload,privKey,signOptions);
        return token;
    },

    jwtVerify: (token) => {
        var pubKey = fs.readFileSync('./config/pub.key','utf-8');
        var verifyOptions = {
            expiresIn: '12h',
            algorithm:["RS256"]
        }
        try {
            return jwt.verify(token,pubKey,verifyOptions);
        } catch (error) {
            return false;
        }
    }
}