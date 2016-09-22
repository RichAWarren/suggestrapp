const validateTokenDate = require('../../helpers/access-token-date-validation.js');

module.exports = {

    method: 'GET',
    path: '/api/user-suggestions',
    handler: (req, reply) => {
        validateTokenDate(req.state.token, (err, is_valid) => {
            if (err) throw err;
            if (is_valid) {
                reply(is_valid)
            } else {
                reply().redirect('/')
            }
        })
    }
}
