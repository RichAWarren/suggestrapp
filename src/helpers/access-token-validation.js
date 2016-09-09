const jwt = require('jwt-simple')
const request = require('request');

//req.state.token

const validateAccessToken = (token, cb) => {
    if (!token) {
        cb(null, false);
    } else {
        const decoded = jwt.decode(token, process.env.JWT_SECRET);
        const url = `https://graph.facebook.com/debug_token?input_token=${decoded.access_token}&access_token=${process.env.FACEBOOK_CLIENT_ID}|${process.env.FACEBOOK_SECRET}`;
        request(url, (err, response, body) => {
            console.log(JSON.parse(body).data);
            if (err) cb(err)
            else cb(null, JSON.parse(body).data.is_valid)
        })
    }
}


module.exports = validateAccessToken;
