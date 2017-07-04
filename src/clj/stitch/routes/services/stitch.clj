(ns stitch.routes.services.stitch
  (:require [stitch.db.core :as db]
            [stitch.util.fs :as fs]
            [stitch.util.compression :as co]
            [stitch.util.opencv :as cv2]
            [ring.util.http-response :refer :all]
            [clojure.tools.logging :as log]))

(def RESIZE-SCALE
  0.25)

(defn parse-int [s]
  (Integer. (re-find #"[0-9]*" s)))


(defn stitching! [{:keys [params session]}]
  (let [scan_id (parse-int (:scan_id params))
        username (:identity session)
        imgs (db/list-scan-images {:scan_id scan_id})
        ordered-dict-imgs (sort-by #(vec (map % [:image])) imgs)
        ordered-mat-imgs (map #(cv2/resize-to-scale (cv2/read-image-resource (:image %)) RESIZE-SCALE) ordered-dict-imgs)
        stitched (reduce cv2/stitch2 ordered-mat-imgs)
        cropped (cv2/remove-bg stitched)
        media-path (str "results/" username "/" (quot (System/currentTimeMillis) 1000) ".jpg")]

    (cv2/write-image (str "resources/public/" media-path ) cropped)
    (db/update-scan! {:id scan_id :status 2 :result media-path})
    (ok  (db/get-scan {:id scan_id}))))
