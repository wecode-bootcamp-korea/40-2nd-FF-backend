-- migrate:up
ALTER TABLE stores DROP address;
ALTER TABLE stores DROP phone_number;
ALTER TABLE stores DROP blog_url;
ALTER TABLE stores DROP latitude;
ALTER TABLE stores DROP longitude;

-- migrate:down
DROP TABLE stores
