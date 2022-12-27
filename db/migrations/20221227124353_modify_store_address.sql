-- migrate:up
ALTER TABLE stores CHANGE adress address varchar(400) NOT NULL;

-- migrate:down
DROP TABLE stores
