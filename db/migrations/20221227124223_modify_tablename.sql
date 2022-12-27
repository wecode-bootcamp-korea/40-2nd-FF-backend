-- migrate:up
RENAME TABLE evaluation_mood TO evaluations_moods;

-- migrate:down
DROP TABLE evaluations_moods

