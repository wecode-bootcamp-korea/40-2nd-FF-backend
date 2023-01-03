-- migrate:up
ALTER TABLE evaluations ADD content decimal(11,7) NULL


-- migrate:down
DROP TABLE evaluations
