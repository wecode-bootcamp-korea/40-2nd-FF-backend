-- migrate:up
ALTER TABLE evaluations ADD content varchar(700) NULL


-- migrate:down
DROP TABLE evaluations
