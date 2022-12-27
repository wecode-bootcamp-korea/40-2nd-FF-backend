-- migrate:up
ALTER TABLE stores CHANGE social_id social_map_id INT NOT NULL;

-- migrate:down
DROP TABLE stores
