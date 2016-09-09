const querystring = require('querystring')

module.exports = {
    path: '/login',
    method: 'GET',
    handler (req, reply) {
        const query = querystring.stringify({
            client_id: process.env.FACEBOOK_CLIENT_ID,
            redirect_uri: `${process.env.BASE_URL}/welcome`,
        })
        reply.redirect(`https://www.facebook.com/dialog/oauth?${query}`)
    }
}
