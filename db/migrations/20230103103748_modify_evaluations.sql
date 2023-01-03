-- migrate:up
ALTER TABLE evaluations ADD created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP

-- migrate:down
DROP TABLE evaluations
