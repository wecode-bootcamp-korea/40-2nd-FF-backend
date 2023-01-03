-- migrate:up
ALTER TABLE stores ADD longitude decimal(11,7) NULL


-- migrate:down
DROP TABLE stores
