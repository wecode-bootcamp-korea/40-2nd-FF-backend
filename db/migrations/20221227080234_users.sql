-- migrate:up
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  email varchar(200) NOT NULL,
  password varchar(100) NOT NULL,
  phone_number varchar(200) NOT NULL,
  point decimal(10,2) NOT NULL DEFAULT '100000.00',
  social_id int NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
  );

-- migrate:down
DROP TABLE users
