const env = require('env2')
env('config.env')
const postgresurl = process.env.URL || process.env.LOCAL
const pg = require('pg');

const getUserFilms = (user_id, cb) => {
    pg.connect(postgresurl, (err, client, done) => {
        client.query(`
            SELECT *
                FROM interactions i
                JOIN films f ON f.film_id = i.film_id
                WHERE user_id = $1
                AND film_add = $2
                ORDER BY i.interaction_date ASC;`, [user_id, true], function(err, result) {
                    if (err) cb(err);
                    var obj = {
                        success: result.rows != null && result.rows.length > 0
                    }
                    if (obj.success) {
                        obj.films = result.rows;
                    }
                    done();
                    cb(null, JSON.stringify(obj));
                })
    })
}

module.exports = getUserFilms
