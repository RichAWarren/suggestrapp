const validateTokenDate = require('../../helpers/access-token-date-validation.js');
const getUserFilms = require('../../helpers/dashboard/get-user-films.js');
const jwt = require('jwt-simple');

module.exports = {

    method: 'GET',
    path: '/api/get-user-suggestions',
    handler: (req, reply) => {
        validateTokenDate(req.state.token, (err, is_valid) => {
            if (err) throw err;
            if (is_valid) {
                const decoded = jwt.decode(req.state.token, process.env.JWT_SECRET);
                getUserFilms(decoded.id, (err, data) => {
                    if (JSON.parse(data).success) {
                        reply(JSON.stringify(JSON.parse(data).films))
                    } else {
                        reply('no films for this user')
                    }
                })
            } else {
                reply().redirect('/')
            }
        })
    }
}
