-- migrate:up
CREATE TABLE categories (
  id INT NOT NULL AUTO_INCREMENT,
  type varchar(100) NOT NULL,
  PRIMARY KEY (id)
  );

-- migrate:down
DROP TABLE categories

