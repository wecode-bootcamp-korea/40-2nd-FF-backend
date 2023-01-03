-- migrate:up
ALTER TABLE stores ADD address varchar(400) NULL,
ALTER TABLE stores ADD phone_number varchar(200) NULL,
ALTER TABLE stores ADD latitude decimal(11,7) NULL,
ALTER TABLE stores ADD longitude decimal(11,7) NULL


-- migrate:down
DROP TABLE stores
