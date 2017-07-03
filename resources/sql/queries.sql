-- :name create-user! :! :n
-- :doc creates a new user record
INSERT INTO users
(id,  pass)
VALUES (:id,  :pass)

-- :name update-user! :! :n
-- :doc update an existing user record
UPDATE users
SET first_name = :first_name, last_name = :last_name, email = :email
WHERE id = :id

-- :name get-user :? :1
-- :doc retrieve a user given the id.
SELECT * FROM users
WHERE id = :id

-- :name delete-user! :! :n
-- :doc delete a user given the id
DELETE FROM users
WHERE id = :id

-- :name create-scan :insert
-- :doc creates a new scan record and returns that record
INSERT INTO scan
(owner,  name, description, status)
VALUES (:owner,  :name, :description, 1)
RETURNING id

-- :name update-scan! :! :n
-- :doc update an existing user record
UPDATE scan
SET status = :status, result = :result
WHERE id = :id

-- :name get-scan :? :1
-- :doc retrieve a scan given the id.
SELECT * FROM scan
WHERE id = :id

-- :name list-user-scans
-- :doc retrieve a scan given the id.
SELECT * FROM scan
WHERE owner = :owner

-- :name delete-scan! :! :n
-- :doc delete a scan given the id
DELETE FROM scan
WHERE id = :id



-- :name create-image! :<!
-- :doc creates a new image record and returns that record
INSERT INTO image
(image,  thumbnail, geometry, scan_id)
VALUES (:image,  :thumbnail, ST_SetSRID(ST_MakePoint(:long, :lat), 4326), :scan_id)
RETURNING id

-- :name list-scan-images
-- :doc retrieve images given the scan_id.
SELECT id, image, thumbnail, geometry, ST_X(geometry) as lat, ST_Y(geometry) as long, scan_id FROM image
WHERE scan_id = :scan_id


-- :name delete-image! :! :n
-- :doc delete a image given the id
DELETE FROM image
WHERE id = :id

-- :name delete-scan-images! :! :n
-- :doc delete images given the scan_id
DELETE FROM image
WHERE scan_id = :scan_id
