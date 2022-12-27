-- migrate:up
ALTER TABLE reservations ADD updated_at timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP;

-- migrate:down
DROP TABLE reservations
