BEGIN;

INSERT INTO users (facebook_id, name)
VALUES ('10157431068110344', 'Richard Warren');

INSERT INTO groups (member_ids, member_names, invite_ids)
VALUES ('10157431068110344', 'Richard Warren', null);

INSERT INTO films (film_id, title, overview, backdrop, vote_avg, poster, release_date, genre)
VALUES (1, 'Matrix', 'overviewssssss', 'backdropssss', 9.9, 'postersss', 'release_datessss', 'genresssss');

INSERT INTO interactions (interaction_id, user_id, user_recommend_id, film_id, group_id, film_delete_ids, film_add, interaction_date)
VALUES (1, '10157431068110344', null, 1, 1, 'no', true, 1);

COMMIT;







-- SELECT (interaction_id, user_id, user_recommend_id, i.film_id, group_id, interaction_date) FROM interactions i
-- JOIN films f ON f.film_id = i.film_id
--     WHERE user_id = '10157431068110344'
--     AND film_add = true
--     AND film_delete_ids <> '10157431068110344'
--     ORDER BY i.interaction_date ASC;



-- select * from people p join races r on p.person_id = r.person_id join lap_times l on r.race_id = l.race_id;
--
--
-- SELECT * FROM races r
--          JOIN (
--              SELECT race_id, min(lap_time) laptime FROM lap_times GROUP BY race_id
--          ) AS l ON r.race_id = l.race_id
--          JOIN people p ON p.person_id = r.person_id
-- ORDER BY l.laptime ASC;
