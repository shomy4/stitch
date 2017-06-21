CREATE TABLE image
( id serial PRIMARY KEY,
  image VARCHAR(256),
  thumbnail VARCHAR(256),
  geometry geometry(Geometry, 4326),
  scan_id INTEGER REFERENCES scan (id)
)
