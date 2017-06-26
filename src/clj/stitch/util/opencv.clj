(ns stitch.util.opencv
  (:import [org.opencv.core Mat Size Rect Point CvType MatOfPoint MatOfKeyPoint Scalar Core TermCriteria MatOfDMatch MatOfByte MatOfPoint2f]
           [org.opencv.highgui Highgui]
           [org.opencv.imgproc Imgproc]
           [org.opencv.calib3d Calib3d]
           [org.opencv.features2d FeatureDetector DescriptorExtractor DescriptorMatcher Features2d KeyPoint DMatch]))


(def S-SCALE
  1.2)

;; ----------------------------------------------------------------
;; Highgui
;; ----------------------------------------------------------------

(defn read-image-resource [img-path]
    (let [mat (Highgui/imread img-path)]
      mat))

(defn write-image
  ([img-name mat]
  (write-image "." img-name mat))
   ([dest-path img-name mat]
  (Highgui/imwrite (str dest-path "/" img-name) mat)))

(defn clone [mat]
  (.clone mat))

(defn size
  [img]
  (.size img))

(defn rectangle
  ([img x1 y1 x2 y2 col]
     (Core/rectangle img (Point. x1 y1) (Point. x2 y2) col))
  ([img x1 y1 x2 y2 col fill?]
     (Core/rectangle img (Point. x1 y1) (Point. x2 y2) col (if fill? Core/FILLED 1))))

;; ----------------------------------------------------------------
;; Feature detection
;; ----------------------------------------------------------------

(defn detect-keypoints
  [mat algo]
  (let [fd (FeatureDetector/create algo)
        keypoints (MatOfKeyPoint.)]
    (.detect fd mat keypoints)
    keypoints))

(defn detect-keypoints-mser [mat]
  (detect-keypoints mat FeatureDetector/MSER))

(defn detect-keypoints-surf [mat]
  (detect-keypoints mat FeatureDetector/SURF))

  (defn detect-keypoints-orb [mat]
    (detect-keypoints mat FeatureDetector/ORB))

(defn draw-keypoints! [mat keypoints result]
  (let [blue (Scalar. 255 0 0)
        random (Scalar/all -1)]
    (Features2d/drawKeypoints mat keypoints result random Features2d/DRAW_RICH_KEYPOINTS)))

(defn draw-matches! [img-a kp-a img-b kp-b matches result]
  (let [blue (Scalar. 255 0 0)
        random (Scalar/all -1)
        colour random
        single-point-colour random]
    (Features2d/drawMatches img-a kp-a img-b kp-b matches result
                            colour single-point-colour
                            (MatOfByte.) 0)))

(defn dmatch-mat
  [matches]
  "Convert a seq of matches in a MatOfDMatch."
  {:pre [(seq? matches) (every? #(instance? DMatch %) matches)]}
  (let [m (MatOfDMatch.)
        a (into-array matches)]
    (.fromArray m a)
    m))


;; ----------------------------------------------------------------
;; Imgproc
;; ----------------------------------------------------------------


(defn resize
  [mat-src size]
  (let [mat-dst (Mat.)]
    (Imgproc/resize mat-src mat-dst (Size. size size))
    mat-dst))

(defn resize-to-scale
  [mat-src scale]
  (let [mat-dst (Mat.)]
    (Imgproc/resize mat-src mat-dst (Size. (int (* (.cols mat-src) scale)) (int (* (.rows mat-src) scale))))
    mat-dst))

(defn blur
  [img k-s]
  (let [blurred (clone img)]
    (Imgproc/blur img blurred (Size. k-s k-s))
    blurred))

(defn threshold
  [img threshold max]
  (let [result (clone img)]
    (Imgproc/threshold img result threshold max Imgproc/THRESH_BINARY)
    result))

(defn convert-to-gray [img]
  (let [grey (Mat.)]
  (Imgproc/cvtColor img grey Imgproc/COLOR_RGB2GRAY)
  grey))

(defn bounding-rect [img]
  (let [thresh (threshold img 1 255)
        grey (convert-to-gray thresh)
        contours (java.util.ArrayList. )]
        (Imgproc/findContours grey contours (Mat.)
          Imgproc/RETR_LIST Imgproc/CHAIN_APPROX_SIMPLE)

        (Imgproc/boundingRect (last (vec contours)))
        ))

(defmulti to-map class)

(defmethod to-map Point [p]
  {:x (.x p) :y (.y p)})

(defmethod to-map KeyPoint [kp]
  {:point (to-map (.pt kp))
   :size (.size kp)
   :angle (.angle kp)
   :response (.response kp)
   :octave (.octave kp)
   :class-id (.class_id kp)})

(defmethod to-map DMatch [dm]
  {:queryIdx (.queryIdx dm)
   :trainIdx (.trainIdx dm)
   :imgIdx   (.imgIdx   dm)
   :distance (.distance dm)})


(defn dist [[x1 y1] [x2 y2]]
  (let [dx (- x2 x1)
        dy (- y2 y1)]
    (java.lang.Math/sqrt (+ (* dx dx) (* dy dy)))))

(defn to-xy [kp-map]
  ((juxt :x :y) (:point kp-map)))

(defn is-keypoint? [x] (instance? KeyPoint x))

(defn kp-seq
  [kp-mat]
  {:pre [(instance? MatOfKeyPoint kp-mat)]}
  (seq (.toArray kp-mat)))

(defn kp-vec
  [kp-mat]
  {:pre [(instance? MatOfKeyPoint kp-mat)]}
  (vec (.toArray kp-mat)))

(defn kp-mat [kps]
  {:pre [(seq? kps) (every? is-keypoint? kps)]}
  (let [m (MatOfKeyPoint.)
        a (into-array kps)]
    (.fromArray m a)
    m))

;; Naive O(n^2) implementation
(defn kp-dists
  [keypoints]
  {:pre [(seq? keypoints) (every? is-keypoint? keypoints)]}
  (let [kps (map to-map keypoints)]
    (for [a kps
          b kps]
      {:a a
       :b b
       :dist (dist (to-xy a) (to-xy b))})))

(defn nearby? [kpd]
  (let [max-radius-factor 7/4
        min-size (min (:size (:a kpd)) (:size (:b kpd)))
        max-dist (* max-radius-factor min-size)]
    (< (:dist kpd) max-dist)))

(defn similar-size? [kpd]
  (let [ratio (/ (:size (:a kpd)) (:size (:b kpd)))]
    (< 3/5 ratio 5/3)))

(defn non-trivial-size?
  [kpd]
  {:pre [(:size kpd)]}
  (< 5 (:size kpd)))

(defn good-matches [m]
  (let [result (MatOfDMatch.)
        matches (.toList m)
        dists   (map #(.distance %) matches)
        d-min (apply min dists)
        d-max (apply max dists)
        good (filter (fn [x] (<= (.distance x) (max (* 4.5 d-min) 0.0045))) matches)]
    (dmatch-mat good)))

(defn calculate-homography [img-a img-b]
  (let [algos {:surf {:extractor DescriptorExtractor/SURF :detector FeatureDetector/SURF}
               :orb {:extractor DescriptorExtractor/ORB :detector FeatureDetector/ORB}
               :sift {:extractor DescriptorExtractor/SIFT :detector FeatureDetector/SIFT}
               :harris-orb {:extractor DescriptorExtractor/BRIEF :detector FeatureDetector/ORB}}
        matchers {:flann DescriptorMatcher/FLANNBASED, :brute DescriptorMatcher/BRUTEFORCE}
        algo (algos :surf)
        extractor (DescriptorExtractor/create (:extractor algo))
        matcher (DescriptorMatcher/create (matchers :flann))
        img-a-g (blur (convert-to-gray img-a) 5.0)
        img-b-g (blur (convert-to-gray img-b) 5.0)
        kp-a (detect-keypoints img-a-g (:detector algo))
        kp-b (detect-keypoints img-b-g (:detector algo))
        desc-a (Mat.)
        desc-b (Mat.)
        matches (MatOfDMatch.)]
    (.compute extractor img-a kp-a desc-a)
    (.compute extractor img-b kp-b desc-b)
    (.match matcher desc-a desc-b matches)
    (let [good (good-matches matches)
          img-matches (Mat.)
          good-list (.toList good)
          kp-a-vec (kp-vec kp-a)
          kp-b-vec (kp-vec kp-b)
          good-matches-vec (map #(to-map %) good-list)
          img-points-list-a (map #(.pt (get kp-a-vec (:queryIdx %) )) good-matches-vec)
          img-points-list-b (map #(.pt (get kp-b-vec (:trainIdx %) )) good-matches-vec)
          matK1 (MatOfPoint2f.)
          matK2 (MatOfPoint2f.)]

      (println "Good matches" (count good-matches-vec))
      (.fromList matK1 img-points-list-a)
      (.fromList matK2 img-points-list-b)
      (draw-matches! img-a kp-a img-b kp-b good img-matches)
      (write-image "test.jpg" img-matches)
      (Calib3d/findHomography   matK1 matK2 Calib3d/RANSAC 10)
      )))

(defn warp-perspective
  ([img h s] (warp-perspective img h s (Mat.)))
  ([img h s res]
    (Imgproc/warpPerspective img res h s)
    res))

(defn rect
  [a b c d]
  (Rect. a b c d))

(defn area-of-interest
  [w r]
  (Mat. w r))

(defn copy-to
  [src-img dest-img]
  (doto src-img
    (.copyTo dest-img)))

(defn ludnica
  [ivec]
  (map (fn [[w i]] (let [r (.rows i)
                         c (.cols i)
                         r (rect 0 0 c r)]
                         (copy-to i (Mat. w r))
                         w))
                  ivec))

(defn stitch [img-a img-b]
  (let [res (Mat.)
        homography (calculate-homography img-a img-b)
        res-cols (.cols img-a)
        res-rows (.rows img-a)
        cols (.cols img-b)
        rows (.rows img-b)
        size (Size. (int (* S-SCALE res-cols)) (int (* S-SCALE res-rows)))
        warped-image (warp-perspective img-a homography size res)
        roi (rect 0 0 cols rows )
        res-roi (Mat. res roi)]
        (.copyTo img-b res-roi)
        (let [bbox (bounding-rect res)
              b-res (Mat. res bbox)]
              b-res)))


;; ----------------------------------------------------------------
;; REPL PLAYGROUND STITCHING
;; ----------------------------------------------------------------

(comment

  (def i1 (read-image-resource "test_stitches/1/a1.JPG"))
  (def i2 (read-image-resource "test_stitches/1/a2.JPG"))
  (def i3 (read-image-resource "test_stitches/1/a3.JPG"))
  (def i4 (read-image-resource "test_stitches/1/a4.JPG"))
  (def i5 (read-image-resource "test_stitches/1/a5.JPG"))
  (def i6 (read-image-resource "test_stitches/1/a6.JPG"))
  (def i7 (read-image-resource "test_stitches/1/a7.JPG"))
  (def i8 (read-image-resource "test_stitches/1/a8.JPG"))
  (def i9 (read-image-resource "test_stitches/1/a9.JPG"))

  (def geocordinates [{:longitude 45.132 :latitude 19.221}
                {:longitude 45.134 :latitude 19.220}
                {:longitude 45.099 :latitude 19.220}
                {:longitude 45.102 :latitude 19.219}
                {:longitude 45.101 :latitude 19.225}])

  (sort-by #(vec (map % [:longitude :latitude])) geocordinates)


  (def iv1 [i1 i2 i3 i4 i5])
  (def iv2 [i5 i6])
  (def s123456789 (reduce stitch iv1))
  (write-image "test_stitches/1/s56789.jpg" s56789)

)
