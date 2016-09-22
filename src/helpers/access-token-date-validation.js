const jwt = require('jwt-simple')

const validateTokenDate = (token, cb) => {
    const decoded = jwt.decode(token, process.env.JWT_SECRET);
    const currentDate = new Date().getTime()
    if (currentDate > decoded.token_expire) {
        cb(null, false);
    } else {
        cb(null, true)
    }
}


module.exports = validateTokenDate;
