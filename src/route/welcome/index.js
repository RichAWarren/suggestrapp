const jwtToken = require('./jwt-token.js')
const getFacebookAccessToken = require('./get-facebook-access-token.js')
const getFacebookUserDetailsForAccessToken = require('./get-facebook-user-details-for-access-token.js')


module.exports = {

    method: 'GET',
    path: '/welcome',
    handler: (req, reply) => {
    // Use facebook access code to get facebook access token
        getFacebookAccessToken(req.query.code, (err, accessToken) => {
            if (err) throw error

            // Get user details for access_token
            getFacebookUserDetailsForAccessToken(accessToken, (err, {id, name}) => {
                if (err) throw err
                reply.redirect('/random-hop')
                   .state('token', jwtToken(id, name, accessToken))
            })
        })
    }
}
