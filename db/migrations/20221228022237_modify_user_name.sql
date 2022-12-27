-- migrate:up
ALTER TABLE users MODIFY name varchar(100) NULL;

-- migrate:down
DROP TABLE users
