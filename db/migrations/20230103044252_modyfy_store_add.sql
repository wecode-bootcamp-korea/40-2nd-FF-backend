-- migrate:up
ALTER TABLE stores ADD address varchar(400) NULL

-- migrate:down
DROP TABLE stores
