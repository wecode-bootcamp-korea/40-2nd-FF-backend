-- migrate:up
ALTER TABLE evaluations CHANGE price price_rate INT NOT NULL;

-- migrate:down
DROP TABLE evaluations
