const querystring = require('querystring')
const request = require('request')

const payload = (facebookCode) =>
  querystring.stringify({
      code: facebookCode,
      client_id: process.env.FACEBOOK_CLIENT_ID,
      client_secret: process.env.FACEBOOK_SECRET,
      redirect_uri: `${process.env.BASE_URL}/welcome`
  })


const getFacebookAccessToken = (facebookCode, cb) => {
    const url = `https://graph.facebook.com/v2.3/oauth/access_token?${payload(facebookCode)}`

    request(url, (err, response, body) => {
        if (err) cb(err)
        else cb(null, JSON.parse(body).access_token)
    })
}

module.exports = getFacebookAccessToken
