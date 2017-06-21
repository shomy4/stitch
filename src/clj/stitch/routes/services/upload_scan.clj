(ns stitch.routes.services.upload-scan
  (:require [stitch.db.core :as db]
            [stitch.util.fs :as fs]
            [stitch.util.compression :as co]
            [stitch.util.exif :as exif]
            [stitch.util.opencv :as cv2]
            [ring.util.http-response :refer :all]
            [clojure.tools.logging :as log])
  (:import [java.awt.image AffineTransformOp BufferedImage]
           [java.io ByteArrayOutputStream FileInputStream]
           java.awt.geom.AffineTransform
           javax.imageio.ImageIO
           java.net.URLEncoder))

(def thumbnail-dir
  "resources/public/")

(defn save-scan! [request ]
 (try
   (let [params (:params request)
         file (:file params)
         {filename :filename  tempfile :tempfile} file
         {name :name description :description} params
         timestamp-zip-location (str "tmp/" (quot (System/currentTimeMillis) 1000) ".zip")

         scan_id (:id (first (db/create-scan  {:name name :description description :owner (:identity (:session request)) })))
         destination-location (str "scans/" (:identity (:session request)) "/" scan_id)
         thumbnail-loc (str "thumbnails/" (:identity (:session request)) "/" scan_id)
         destination-thumb-full-location (str thumbnail-dir thumbnail-loc)
        ]

     (clojure.java.io/copy tempfile ( java.io.File.  timestamp-zip-location  ))
     (co/unzip timestamp-zip-location (str "scans/" (:identity (:session request)) "/" scan_id))
     (println destination-location)
     (doseq [file (fs/list-dir destination-location)]
              (let [img-name (.getName file)
                    img-path (.getAbsolutePath file)
                    gps-coords (exif/gps-coords file)
                    {:keys [long lat]} gps-coords
                    img-mat (cv2/read-image-resource img-path)
                    thumb-mat (cv2/resize img-mat 300)]
                    (fs/mkdirs destination-thumb-full-location)
                    (cv2/write-image destination-thumb-full-location img-name  thumb-mat)
                    (db/create-image! {:image img-path :thumbnail (str thumbnail-loc img-name) :lat lat :long long :scan_id scan_id})))
     (fs/delete timestamp-zip-location)
     (ok {:result :ok}))
   (catch Exception e
     (log/error e)
     (internal-server-error "error"))))
