CREATE TABLE scan
(id    SERIAL PRIMARY KEY,
 owner VARCHAR(20) NOT NULL,
 name  VARCHAR(64) NOT NULL,
 description VARCHAR(256),
 status INTEGER NOT NULL,
 result VARCHAR(256)
 );
