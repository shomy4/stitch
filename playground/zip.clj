(import 'java.util.zip.ZipInputStream)
(require '[clojure.java.io :as io])
(def zs (ZipInputStream. (io/input-stream "/home/milos/Desktop/image_gps.zip")))
; zs
; #object[java.util.zip.ZipInputStream 0x34e3789b "java.util.zip.ZipInputStream@34e3789b"]


(defn entries [zipfile]
  (lazy-seq
    (if-let [entry (.getNextEntry zipfile)]
     (cons entry (entries zipfile)))))

(defn walk-zip-stream [zipInputstream]
    (doseq [e (entries zipInputstream)]
     (println e)
     (.closeEntry zipInputstream)))

(def ze (.getNextEntry zs))
; ze
; #object[java.util.zip.ZipEntry 0x67e31abf "IMG_0022.jpg"]
(.getName ze)
(.getSize ze)


;;TEST
(with-open [in (java.util.zip.ZipInputStream.
  (clojure.java.io/input-stream
    "/home/milos/Desktop/images.zip"))]
    ( in))

(defn entries [zipfile]
 (lazy-seq
  (if-let [entry (.getNextEntry zipfile)]
   (cons entry (entries zipfile)))))


(with-open [z (-> "/home/milos/Desktop/images.zip" java.io.FileInputStream. java.util.zip.ZipInputStream.)]
  (let [transform (comp (filter #(.isDirectory %)) (map #(-> % .getName  println)))]
    (transduce transform (constantly nil) (entries z))))



{"id":378,"analysis_name":"Warner 17 East 55ac 2017521281","analysis_type":3,"object_type":1,"layer_plant_family":null,"layer_plant":null,"layer_plant_stage_unit":null,"plants_per_area_unit":3,"plants_per_area":null,"layer_plant_stage":null,"analysis_comment":"Slugs would be a concern","util":"agrisense-dronedeploy-plugin","creation_date":"2017-05-21T23:36:02.574119Z","analysis_status":4,"analysis_result":"https://appws.agrisens.com:55443/media/results/25/2/591db339b462a845c22c58b9/592224a10952cd0001b39d96/AnalysisResponse.zip","analysis_layer":124,"payment_id":"592224a1e765020001c40d67","payment_amount":"46.5200","export_id":"592224a10952cd0001b39d96","plan_id":"591db339b462a845c22c58b9","plan_name":"Warner 17 East 55ac","plan_username":"lbdrones@comcast.net","growing_stage":"V5","crop_type":"Corn","application_id":2,"field_name":"Warner 17 East 50 ac","field_location":"Hilltop Rd","client":2307,"area_surface":"209155.00","plan_geometry":{"type":"Polygon","coordinates":[[[-76.46192550659181,39.89011401200581],[-76.46231174468994,39.88971064397226],[-76.46284818649293,39.88958716348749],[-76.46546602249146,39.89253417036217],[-76.46525144577028,39.89261648717098],[-76.46432876586915,39.89279758380234],[-76.46402835845949,39.89301160647711],[-76.46411418914796,39.89363720738692],[-76.46428585052492,39.89424633962821],[-76.4646077156067,39.89498716884207],[-76.4656162261963,39.896402953508954],[-76.46600246429445,39.89760470126503],[-76.46550893783571,39.898394880086656],[-76.46497249603273,39.89885581352501],[-76.46417856216432,39.898691194795795],[-76.46368503570557,39.89841134204854],[-76.46276235580446,39.898016253871525],[-76.46233320236206,39.89778578471638],[-76.46186113357545,39.89719314618698],[-76.46198987960815,39.89495424326929],[-76.46102428436281,39.89334087082563],[-76.46057367324829,39.89241892666377],[-76.46061658859254,39.891842705265326],[-76.46121740341188,39.89090427719106],[-76.4615821838379,39.89052560959333],[-76.46192550659181,39.89011401200581]]]},"report_type":2}


(require '[clojure.java.io :as io])

(defn entries [zip-stream]
  (take-while #(not (nil? %))
              (repeatedly #(.getNextEntry zip-stream))))

(defn copy-file [zip-stream filename]
  (with-open [out-file (file-out-stream filename)]
             (let [buff-size 4096
                             buffer (byte-array buff-size)]
               (loop [len (.read zip-stream buffer)]
                     (when (> len 0)
                       (.write out-file buffer 0 len)
                       (recur (.read zip-stream buffer)))))))

(defn extract-stream [zip-stream to-folder]
  (let [extract-entry (fn [zip-entry]
                          (when (not (.isDirectory zip-entry))
                            (let [to-file (io/file to-folder
                                                   (.getName zip-entry))
                                          parent-file (io/file (.getParent to-file))]
                              (.mkdirs parent-file)
                              (copy-file zip-stream to-file))))]
    (->> zip-stream
      entries
      (map extract-entry)
      dorun)))
