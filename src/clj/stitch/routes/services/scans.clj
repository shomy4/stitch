(ns stitch.routes.services.scans
  (:require [stitch.layout :refer [error-page]]
            [stitch.db.core :as db]
            [ring.util.http-response :refer :all])
  (:import java.io.ByteArrayInputStream))


(defn list-scans [owner]
  (ok (db/list-user-scans {:owner owner})))
