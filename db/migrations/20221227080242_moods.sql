-- migrate:up
CREATE TABLE moods (
  id INT NOT NULL AUTO_INCREMENT,
  type varchar(100) NOT NULL,
  PRIMARY KEY (id)
  );

-- migrate:down
DROP TABLE moods

