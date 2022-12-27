-- migrate:up
CREATE TABLE reservations (
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  store_id INT NOT NULL,
  reservation_date datetime NOT NULL,
  reservation_person INT NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (store_id) REFERENCES stores (id)
  );

-- migrate:down
DROP TABLE reservations
