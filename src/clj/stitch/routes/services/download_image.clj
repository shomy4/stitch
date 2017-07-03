(ns stitch.routes.services.download-image
  (:require [stitch.db.core :as db]
            [stitch.util.fs :as fs]
            [ring.util.response :as response]
            [clojure.tools.logging :as log]))

(def resources-folder
  "resources/public/")

(defn download-image [scan_id]
  (let [scan (db/get-scan {:id (read-string scan_id)})
        image-path (str resources-folder (:result scan))]
        (merge
          (response/file-response image-path)
          {:headers {"Content-Type" "image/jpeg"
                     "content-disposition" (str "attachment; filename=" "scan_" scan_id ".jpg")}})))
