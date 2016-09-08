const request = require('request')

const getFacebookUserDetailsForAccessToken = (access_token, cb) => {
  const url = `https://graph.facebook.com/me?access_token=${access_token}`
  request(url, (err, response, body) => {
    if (err) cb(err)

    // Get user details returned by Facebook
    const userDetails = JSON.parse(body)

    // Call callback with user details
    cb(null, userDetails)
  })
}

module.exports = getFacebookUserDetailsForAccessToken
