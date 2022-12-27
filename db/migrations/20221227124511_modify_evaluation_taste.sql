-- migrate:up
ALTER TABLE evaluations CHANGE taste taste_rate INT NOT NULL;

-- migrate:down
DROP TABLE evaluations
