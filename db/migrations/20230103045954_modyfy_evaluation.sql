-- migrate:up
ALTER TABLE evaluations ADD content decimal(11,7) NULL,
ALTER TABLE evaluations ADD created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP


-- migrate:down
DROP TABLE evaluations
