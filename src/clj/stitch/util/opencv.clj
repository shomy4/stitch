(ns stitch.util.opencv
  (:import [org.opencv.core Mat Size Rect Point CvType MatOfPoint MatOfKeyPoint Scalar Core TermCriteria MatOfDMatch MatOfByte MatOfPoint2f]
           [org.opencv.highgui Highgui]
           [org.opencv.imgproc Imgproc]
           [org.opencv.calib3d Calib3d]
           [org.opencv.features2d FeatureDetector DescriptorExtractor DescriptorMatcher Features2d KeyPoint DMatch]))


(def S-SCALE
  1.1)

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

(defn inverse [mat]
  (.inv mat))

(defn identity-mat [rows cols type]
  (Mat/eye rows cols type))

(defn size
  [img]
  (.size img))

(defn rectangle
  ([img x1 y1 x2 y2 col]
     (Core/rectangle img (Point. x1 y1) (Point. x2 y2) col))
  ([img x1 y1 x2 y2 col fill?]
     (Core/rectangle img (Point. x1 y1) (Point. x2 y2) col (if fill? Core/FILLED 1))))

(defn matrix-multiplication [m1 m2]
  (let [res-mat (Mat.)]
    (Core/gemm m1 m2 1  (Mat.) 0 res-mat 0)
    res-mat))

(defn add
  ([img1 img2]
    (let [add-res (Mat.)]
      (Core/add img1 img2 add-res)
      add-res))
  ([img1 img2 mask]
    (let [add-res (Mat.)]
      (Core/add img1 img2 add-res mask)
      add-res)))

(defn bitwise_and [img1 img2]
  (let [res (Mat.)]
    (Core/bitwise_and img1 img2 res)
    res))

(defn bitwise_not [img1]
  (let [res-not (Mat.)]
    (Core/bitwise_not img1 res-not)
    res-not))

(defn bitwise_or [img1 img2]
  (let [res (Mat.)]
    (Core/bitwise_or img1 img2 res)
    res))

(defn bitwise_xor [img1 img2]
  (let [res (Mat.)]
    (Core/bitwise_xor img1 img2 res)
    res))
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

;;Function for initial image base points setup
(defn create-base-points [img]
  (let [rows (.rows img)
        cols (.cols img)
        mat-bp (Mat. 4 3 CvType/CV_64FC1 (Scalar. 0 0))]
        (.put mat-bp 0 0
          (double-array [0 0 1 cols 0 1 0 rows 1 cols rows 1] ))
    mat-bp))





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

(defn convert-to-gray [img]
  (let [grey (Mat.)]
    (Imgproc/cvtColor img grey Imgproc/COLOR_RGB2GRAY)
    grey))

(defn threshold
  [img threshold max]
  (let [result (Mat.)
        gray (convert-to-gray img)]
    (Imgproc/threshold gray result threshold max Imgproc/THRESH_BINARY)
    result))



(defn bounding-rect [img]
  (let [thresh (threshold img 1 255)
        contours (java.util.ArrayList. )]
        (Imgproc/findContours thresh contours (Mat.)
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
        good (filter (fn [x] (<= (.distance x) (max (* 5 d-min) 0.005))) matches)]
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


(defn find-dimensions [h img]
  (let [base-points (create-base-points img)
        base-atom (atom {:min_x Integer/MAX_VALUE :min_y Integer/MAX_VALUE
           :max_x Integer/MIN_VALUE :max_y Integer/MIN_VALUE })]
  (loop [x (dec (.rows base-points))]
    (if (< x 0)
      base-atom
       (let [m (matrix-multiplication h (.t (.row base-points x)))]
          (if (> (first (.get m 0 0)) (:max_x @base-atom))
            (swap! base-atom  merge {:max_x (first (.get m 0 0))}))
          (if (> (first (.get m 1 0)) (:max_y @base-atom))
            (swap! base-atom  merge {:max_y (first (.get m 1 0))}))
          (if (< (first (.get m 0 0)) (:min_x @base-atom))
            (swap! base-atom  merge {:min_x (first (.get m 0 0))}))
          (if (< (first (.get m 1 0)) (:min_y @base-atom))
            (swap! base-atom  merge {:min_y (first (.get m 1 0))}))
              (recur (dec x) ))))
      (if (< (:max_x @base-atom) (.cols img))
        (swap! base-atom  merge {:max_x (.cols img)}))
      (if (< (:max_y @base-atom) (.rows img))
        (swap! base-atom  merge {:max_y (.rows img)}))
      (if (< (:min_x @base-atom) 0)
        (swap! base-atom  merge {:max_x (- (:max_x @base-atom) (:min_x @base-atom))}))
      (if (< (:min_y @base-atom) 0)
        (swap! base-atom  merge {:max_y (- (:max_y @base-atom) (:min_y @base-atom))}))
    @base-atom))


(defn create-move-homography [h img]
  (let [expanded-dimensions (find-dimensions h img)
        move_h (identity-mat 3 3 CvType/CV_64FC1)]
    (if (< (:min_x expanded-dimensions) 0)
      (.put move_h 0 0 (double-array [1 0 (Math/abs (:min_x expanded-dimensions))])))
    (if (< (:min_x expanded-dimensions) 0)
      (.put move_h 1 0 (double-array [0 1 (Math/abs (:min_y expanded-dimensions))])))
      move_h))


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


(defn stitch2 [img-a img-b]
  (let [res (Mat.)
        homography (calculate-homography img-a img-b)
        inverse-h (inverse homography)
        dimensions (find-dimensions inverse-h img-a)
        s (Size. (int (* (:max_y dimensions) S-SCALE)) (int (* (:max_x dimensions) S-SCALE)))
        move_h (create-move-homography inverse-h img-a)
        mod_inv_h (matrix-multiplication move_h inverse-h)
        res1 (Mat.)
        res2 (Mat.)]
        (warp-perspective img-a move_h s res1)
        (warp-perspective img-b mod_inv_h s res2)
        (let [result (Mat/zeros (.rows res1) (.cols res1) CvType/CV_8UC3)
              mask (bitwise_not (threshold res2 0 255))
              result1 (add res1 result  mask)
              final-img (add res2 result1)]
              final-img)))

(defn remove-bg [img]
  (let [bbox (bounding-rect img)
        b-res (Mat. img bbox)]
        b-res))
;; ----------------------------------------------------------------
;; REPL PLAYGROUND STITCHING
;; ----------------------------------------------------------------

(comment

  (def i1
    (read-image-resource "scans/milos/24/DJI_0052.JPG"))
  (def i2
    (read-image-resource "scans/milos/24/DJI_0053.JPG"))
  (def i3
    (read-image-resource "scans/milos/24/DJI_0054.JPG"))
  (def i4
    (read-image-resource "scans/milos/24/DJI_0055.JPG"))
    (def i5
       (read-image-resource "scans/milos/24/DJI_0056.JPG"))
  (def i6
     (read-image-resource "scans/milos/24/DJI_0057.JPG"))
  (def i7
    (read-image-resource "scans/milos/24/DJI_0058.JPG"))
  (def i8
    (read-image-resource "scans/milos/24/DJI_0059.JPG"))
  (def i9
    (read-image-resource "scans/milos/24/DJI_0060.JPG"))
  (def i10
    (read-image-resource "scans/milos/24/DJI_0061.JPG"))

  (def geocordinates [{:longitude 45.132 :latitude 19.221}
                {:longitude 45.134 :latitude 19.220}
                {:longitude 45.099 :latitude 19.220}
                {:longitude 45.102 :latitude 19.219}
                {:longitude 45.101 :latitude 19.225}])

  (sort-by #(vec (map % [:longitude :latitude])) geocordinates)


    (def iv [i1 i2 i3 i4 i5 i6 i7 i8 i9 i10])
  (def rsiv (map #(resize-to-scale % 0.25) iv))
  (def keyImage (first rsiv))
  (def col (.cols keyImage))
  (def row (.rows keyImage))
  (def res1 (Mat.))
  (def res2 (Mat.))
  (def h (calculate-homography keyImage (second rsiv)))
  (def inv-h (.inv h))
  (def dimensions (find-dimensions inv-h keyImage))
  (def s (Size. (int (:max_y dimensions)) (int (:max_x dimensions))))
  (def move_h (create-move-homography inv-h keyImage))
  (def mod_inv_h (matrix-multiplication move_h inv-h))

  (write-image "move_ha.jpg" res1)
  (write-image "move_ha2.jpg" res2)
  (println "H")
  (println (.dump h))
  (println "Move H")
  (println (.dump move_h))
  (println "Mod Inv H")
  (println (.dump mod_inv_h))
  (def )
  (def re-add-1 (add res1 result-img  (bitwise_not (threshold res2 1 255))))
  (def final-img (add res2 re-add-1))
  (write-image "test.jpg" final-img)
)
