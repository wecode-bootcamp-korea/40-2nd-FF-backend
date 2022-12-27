-- migrate:up
ALTER TABLE evaluations CHANGE service service_rate INT NOT NULL;

-- migrate:down
DROP TABLE evaluations
