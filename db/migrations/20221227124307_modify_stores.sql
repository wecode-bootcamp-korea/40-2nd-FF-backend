-- migrate:up
ALTER TABLE stores MODIFY thumbnail_image varchar(300) NULL ;

-- migrate:down
DROP TABLE stores
