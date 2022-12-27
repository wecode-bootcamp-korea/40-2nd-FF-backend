-- migrate:up
ALTER TABLE users MODIFY email varchar(200) NULL;

-- migrate:down
DROP TABLE users
