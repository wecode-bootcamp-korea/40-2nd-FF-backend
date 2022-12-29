-- migrate:up
ALTER TABLE evaluations ADD content varchar(400) NULL


-- migrate:down
DROP TABLE evaluations
