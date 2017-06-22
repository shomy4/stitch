(ns stitch.util.exif
  "General structure is:
  -> metadata
  ----> directory
  -------> tag (metadata, value)"
  (:refer-clojure :exclude [read])
  (:require [clojure.java.io :as jio]
            [clojure.set :refer :all]
            [clojure.pprint :refer :all])
  (:import [org.apache.commons.imaging Imaging]
           [org.apache.commons.imaging.formats.tiff.write TiffOutputSet]
           [org.apache.commons.imaging.formats.tiff TiffTags]
           [org.apache.commons.imaging.formats.tiff.constants ExifTagConstants]
           [org.apache.commons.imaging.formats.tiff.constants TiffTagConstants]
           [org.apache.commons.imaging.formats.tiff.constants TiffDirectoryConstants]
           [org.apache.commons.imaging.common RationalNumber]
           [java.io FileOutputStream]
           [org.apache.commons.imaging.formats.jpeg.exif ExifRewriter]
           [java.io BufferedOutputStream]))

(defn get-metadata
  "Get metadata for a File."
  [^java.io.File file]
  (-> file
      (Imaging/getMetadata)))

(defn get-directory
  "Get directory of directory-type from metadata.
  See: TiffDirectoryConstants"
  [metadata directory-type]
  (-> metadata .getExif (.findDirectory directory-type)))

(defn get-directories
  "Read only directories present in metadata."
  [metadata]
  (let [directories (-> metadata .getExif .getDirectories)]
    (map #(get-directory metadata (.type %)) directories)))

(defn get-output-set
  "Writeable metadata directories.
  Returns: TiffOutputSet"
  [metadata]
  (-> metadata .getExif .getOutputSet))

(defn get-output-directory
  [output-set directory-type]
  (.findDirectory output-set directory-type))

(defn get-fields
  "Give a directory, get all field entries."
  [directory]
  (into [] (.getDirectoryEntries directory)))

(defn fields->map
  "Convert field entries to a clojure map."
  [fields]
  (into {} (map (fn [field]
                  [(.getTagName field) (.getValue field)]) fields)))

(defn read
  "Generate a clojure map of directories/data from metadata."
  [metadata]
  (->> metadata
       get-directories
       (map (fn [directory]
              [(.description directory)
               (-> directory
                   get-fields
                   fields->map)]))
       (into {})))

(defn copy-file-with-new-metadata
  [from-file to-file output-set]
  (with-open [output-stream (-> to-file
                                (FileOutputStream.)
                                (BufferedOutputStream.))]
    (let [exif-rewriter (ExifRewriter.)]
      (.updateExifMetadataLossless exif-rewriter
                                   from-file
                                   output-stream
                                   output-set))))
(defn get-tag-info
  [output-dir tag]
  (let [field (-> output-dir
                  (.findField tag))]
    (if field
      (.tagInfo field)
      (throw (IllegalArgumentException.
               (format "Tag %s does not exist in metadata" tag))))))

(defn update-value
  "Update an output set with a new value for a dir+tag combination.
  Performs an in-place modification."
  [output-set directory tag values]
  (let [output-dir (get-output-directory output-set directory)
        new-value (into-array (-> values first class) values)
        tag-info (try (get-tag-info output-dir tag)
                      (catch IllegalArgumentException e
                        nil))]
    (if tag-info
      (doto output-dir
        (.removeField tag-info)
        (.add tag-info new-value))
      (.add output-dir tag new-value))))

(defn get-value
  [metadata tag-info]
  (.findEXIFValueWithExactMatch metadata tag-info))

(defn gps-coords [file]
   (let [metadata (get-metadata file)
         gps-metadata  (get  (read metadata) "Gps")
         lat-lon-map (rename-keys (select-keys gps-metadata ["GPSLongitude" "GPSLatitude"])
          {"GPSLongitude" :long, "GPSLatitude" :lat})
          long (:long lat-lon-map)
          lat (:lat lat-lon-map)
          lat-lon (assoc lat-lon-map :long (+ (get long 0 ) (/ (get  long 1 ) 60) (/ (get long 2 ) 3600))
                                     :lat  (+ (get lat 0 ) (/ (get  lat 1 ) 60) (/ (get lat 2 ) 3600)))]
          lat-lon
    ))
