const jwt = require('jwt-simple')

const jwtToken = (id, name, accessToken) => {
  // Create body for jwtToken
  const jwtTokenContent = {
    name: name,
    id: id,
    access_token: accessToken
  }

  // Create a web token with jwt-simple
  // 1. first argument: object specifying data to be included in the web token
  // 2. second argumemt: a secret string that is used to encode/decode the token
  return jwt.encode(jwtTokenContent, process.env.JWT_SECRET)
}

module.exports = jwtToken
