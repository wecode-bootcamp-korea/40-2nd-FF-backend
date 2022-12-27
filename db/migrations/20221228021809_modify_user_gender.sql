-- migrate:up
ALTER TABLE users CHANGE password gender varchar(10) NULL;

-- migrate:down
DROP TABLE users
