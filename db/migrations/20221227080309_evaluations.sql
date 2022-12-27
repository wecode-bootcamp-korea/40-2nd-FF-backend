-- migrate:up
CREATE TABLE evaluations (
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  store_id INT NOT NULL,
  rating INT NOT NULL,
  taste INT NOT NULL,
  price INT NOT NULL,
  service INT NOT NULL,
  image varchar(200) NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (store_id) REFERENCES stores (id)
  );

-- migrate:down
DROP TABLE evaluations

