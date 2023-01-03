-- migrate:up
CREATE TABLE likes (
  user_id INT NOT NULL,
  store_id int NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (store_id) REFERENCES stores (id)
  );

-- migrate:down
DROP TABLE likes

