BEGIN;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS groups CASCADE;
DROP TABLE IF EXISTS films CASCADE;
DROP TABLE IF EXISTS interactions CASCADE;

CREATE TABLE users (
    facebook_id serial PRIMARY KEY,
    name varchar(50),
    film_ids varchar(2000)
    );

CREATE TABLE groups (
    group_id serial PRIMARY KEY,
    member_ids varchar(1000),
    member_names varchar(1000),
    invite_ids varchar(1000)
    );

CREATE TABLE films (
    film_id int PRIMARY KEY,
    title varchar(300),
    overview varchar(3000),
    backdrop varchar(300),
    vote_avg numeric,
    poster varchar(300),
    release_date varchar(50),
    genre varchar(100)
);

CREATE TABLE interactions (
    interaction_id serial PRIMARY KEY,
    user_recommend_id int,
    film_id int,
    group_id int,
    film_delete_ids boolean
);

ALTER TABLE interactions ADD CONSTRAINT interactions_to_user_fk
    FOREIGN KEY (user_recommend_id)
    REFERENCES users (facebook_id)
    ON DELETE CASCADE;

ALTER TABLE interactions ADD CONSTRAINT interactions_to_film_fk
    FOREIGN KEY (film_id)
    REFERENCES films (film_id)
    ON DELETE CASCADE;

ALTER TABLE interactions ADD CONSTRAINT interactions_to_group_fk
    FOREIGN KEY (group_id)
    REFERENCES groups (group_id)
    ON DELETE CASCADE;

COMMIT;

-- select * from people p join races r on p.person_id = r.person_id join lap_times l on r.race_id = l.race_id;
--
--
-- SELECT * FROM races r
--          JOIN (
--              SELECT race_id, min(lap_time) laptime FROM lap_times GROUP BY race_id
--          ) AS l ON r.race_id = l.race_id
--          JOIN people p ON p.person_id = r.person_id
-- ORDER BY l.laptime ASC;
