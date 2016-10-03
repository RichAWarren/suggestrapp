const postgresurl = process.env.URL ||'postgres://Daniel@127.0.0.1/suggestrapp'
const pg = require('pg');

const getUserFilms = (user_id, cb) => {
    pg.connect(postgresurl, (err, client, done) => {
        client.query(`
            SELECT *
                FROM interactions i
                JOIN films f ON f.film_id = i.film_id
                WHERE user_id = $1
                AND film_add = $2
                AND film_delete_ids <> $3
                ORDER BY i.interaction_date ASC;`, [user_id, true, user_id], function(err, result) {
                    if (err) cb(err);
                    var obj = {
                        success: result.rows != null && result.rows.length > 0
                    }
                    if (obj.success) {
                        obj.films = result.rows;
                    }
                    console.log('obj', obj);
                    done();

                    cb(null, JSON.stringify(obj));
                })
    })
}

module.exports = getUserFilms
