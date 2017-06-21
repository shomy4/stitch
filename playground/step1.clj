(require '[stitch.util.fs :as fs] )
(require '[stitch.util.exif :as exif] )
(require '[stitch.util.compression :as c] )
(require '[stitch.util.opencv :as cv2])
(require '[clojure.set :refer :all] )
(import [org.opencv.core Mat Size Point CvType MatOfKeyPoint Scalar Core TermCriteria MatOfDMatch MatOfByte]
         [org.opencv.highgui Highgui]
         [org.opencv.imgproc Imgproc]
         [org.opencv.features2d FeatureDetector DescriptorExtractor DescriptorMatcher Features2d KeyPoint DMatch]
         [org.apache.commons.imaging.common RationalNumber])
#object[clojure.lang.Namespace 0x505c5a3a "stitch.util.fs"]
stitch.util.fs=> (mkdir "test")
false
stitch.util.fs=> (mkdir "test1")
true
stitch.util.fs=> (mkdir "test1")
true
stitch.util.fs=> (in-ns 'stitch.util.compression)
#object[clojure.lang.Namespace 0x2b552266 "stitch.util.compression"]
stitch.util.compression=> (unzip "images.zip" "test1")
"test1"

(let [src-mat (cv2/read-image-resource "IMG_0025.jpg")
  #_=>       thumb-mat (cv2/resize src-mat (Size. 300 300))]
  #_=>   (cv2/write-image "/home/milos/workspace/stitch" "test.jpg" thumb-mat))
(fs/mkdirs "scans/milos/1")
(doseq [file (fs/list-dir "test1")]
         (println (.getName file)))

;;Keys destructuring
(let [{:keys [lat lon]} foo]
    [lat lon])

(defn gps-coords [file]
   (let [metadata (exif/get-metadata file)
         gps-metadata  (get  (exif/read metadata) "Gps")
         lat-lon-map (rename-keys (select-keys gps-metadata ["GPSLongitude" "GPSLatitude"])
          {"GPSLongitude" :long, "GPSLatitude" :lat})
          long (:long lat-lon-map)
          lat (:lat lat-lon-map)
          lat-lon (assoc lat-lon-map :long (float (+ (get long 0 ) (/ (get  long 1 ) 60) (/ (get long 2 ) 3600)))
                                      :lat (float (+ (get lat 0 ) (/ (get  lat 1 ) 60) (/ (get lat 2 ) 3600))))]
          lat-lon
    ))



(defn gps-coords [file]
   (let [metadata (exif/get-metadata file)]
     (rename-keys (select-keys (get  (exif/read metadata) "Gps") ["GPSLongitude" "GPSLatitude"])
      {"GPSLongitude" :long, "GPSLatitude" :lat})))

(doseq [file (fs/list-dir "test1")]
         (let [img-path (.getAbsolutePath file)
               gps-coords (gps-coords file)
               {:keys [long lat]} gps-coords
               img-mat (cv2/read-image-resource img-path)
               thumb-mat (cv2/resize img-mat (Size. 300 300))
               ]
               (println img-path)
               (println gps-coords)
               (println long)
               (println lat)
               (println img-mat)
               (println thumb-mat)))
