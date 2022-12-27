-- migrate:up
CREATE TABLE evaluation_mood (
  evaluation_id INT NOT NULL,
  mood_id int NOT NULL,
  FOREIGN KEY (evaluation_id) REFERENCES evaluations (id),
  FOREIGN KEY (mood_id) REFERENCES moods (id)
  );

-- migrate:down
DROP TABLE evaluation_mood

