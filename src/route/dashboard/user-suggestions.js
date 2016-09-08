const accessTokenValidation = require('../../helpers/access-token-validation.js');

module.exports = {

    method: 'GET',
    path: '/api/user-suggestions',
    handler: (req, reply) => {
        accessTokenValidation(req.state.token, (err, is_valid) => {
            if (err) throw err;
            reply(is_valid)
                .state('cheese', 'toast')
        })
    }
}
