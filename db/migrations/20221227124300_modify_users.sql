-- migrate:up
ALTER TABLE users MODIFY social_id varchar(30) NOT NULL ;

-- migrate:down
DROP TABLE users
