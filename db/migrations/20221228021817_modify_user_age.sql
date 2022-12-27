-- migrate:up
ALTER TABLE users CHANGE phone_number age_range varchar(30) NULL;

-- migrate:down
DROP TABLE users
