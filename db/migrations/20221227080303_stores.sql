-- migrate:up
CREATE TABLE stores (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(200) NOT NULL,
  adress varchar(400) NOT NULL,
  thumbnail_image varchar(100) NULL,
  phone_number varchar(200) NULL,
  blog_url varchar(200) NULL,
  reservation_payment decimal(10,2) NOT NULL,
  category_id int NULL,
  latitude decimal(11,7) NOT NULL,
  longitude decimal(11,7) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES categories (id)
  );

-- migrate:down
DROP TABLE stores

