const jwtToken = require('./jwt-token')
const getFacebookAccessToken = require('./get-facebook-access-token')

module.exports = {

    method: 'GET',
    path: '/welcome',
    handler: (req, reply) => {

    // Use facebook access code to get facebook access token
        getFacebookAccessToken(req.query.code, (err, accessToken) => {
            if (err) throw error
        })
    }
}
