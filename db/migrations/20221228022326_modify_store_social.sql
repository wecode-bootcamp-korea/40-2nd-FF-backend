-- migrate:up
ALTER TABLE stores ADD social_id int NOT NULL;

-- migrate:down
DROP TABLE stores
