const env = require('env2')
env('config.env')
const postgresurl = process.env.URL || process.env.LOCAL
const pg = require('pg');

const deleteUserFilms = (user_id, film_id, cb) => {
    pg.connect(postgresurl, (err, client, done) => {
        client.query(`
            DELETE FROM interactions
            WHERE user_id = $1
            AND film_id = $2;`, [user_id, film_id], function(err, result) {
                done();
                cb(null);
            })
    })
}

module.exports = deleteUserFilm
