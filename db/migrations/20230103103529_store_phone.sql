-- migrate:up
ALTER TABLE stores ADD phone_number varchar(200) NULL


-- migrate:down
DROP TABLE stores
