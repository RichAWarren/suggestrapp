const validateTokenDate = require('../../helpers/access-token-date-validation.js');
const deleteUserFilm = require('../../helpers/dashboard/delete-user-film.js');
const jwt = require('jwt-simple');

module.exports = {

    method: 'POST',
    path: '/api/delete-user-film',
    handler: (req, reply) => {
        validateTokenDate(req.state.token, (err, is_valid) => {
            if (err)  return err;
            if (is_valid) {
                const decoded = jwt.decode(req.state.token, process.env.JWT_SECRET);
                getUserFilms(decoded.id, req.payload, (error, data) => {
                    if (error) return;
                    reply('deleted')
                })
            } else {
                reply().redirect('/')
            }
        })
    }
}
