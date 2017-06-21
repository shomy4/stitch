(ns stitch.util.opencv
  (:import [org.opencv.core Mat Size Point CvType MatOfKeyPoint Scalar Core TermCriteria MatOfDMatch MatOfByte MatOfPoint2f]
           [org.opencv.highgui Highgui]
           [org.opencv.imgproc Imgproc]
           [org.opencv.calib3d Calib3d]
           [org.opencv.features2d FeatureDetector DescriptorExtractor DescriptorMatcher Features2d KeyPoint DMatch]))

;;http://privateblog.info/sozdanie-panoramy-s-pomoshhyu-opencv-i-java/
(defn detect-keypoints-orb [mat]
  (detect-keypoints mat FeatureDetector/ORB))
  (def i1 (read-image-resource "i1.jpg"))
  (def i2 (read-image-resource "i2.jpg"))
  (def b1 (grayscale-image (read-image-resource "i1.jpg")))
  (def b2 (grayscale-image (read-image-resource "i2.jpg")))
  (def kp-mat1 (detect-keypoints-surf b1))
  (def kp-list1  (.toList kp-mat1))
  (def kp-mat2 (detect-keypoints-surf b2))
  (def kp-list2  (.toList kp-mat2))
  (def kp-vec1 (vec kp-list1))
  (def kp-vec2 (vec kp-list2))
  (def good-matches (match b1 b2))
  (def good-matches-vec (vec (.toList good-matches)))
  (def good-matches-queryIdx (map #(.queryIdx %) good-matches-vec))
  (def good-matches-trainIdx (map #(.trainIdx %) good-matches-vec))
  (def img-keys-list1 (map #(get kp-vec1 %) good-matches-queryIdx) )
  (def img-keys-list2 (map #(get kp-vec1 %) good-matches-queryIdx) )
  (def img-points-list1 (map #(.pt (get kp-vec1 %)) good-matches-queryIdx) )
  (def img-points-list2 (map #(.pt (get kp-vec2 %)) good-matches-trainIdx) )
  (let [i1 (read-image-resource "i1.jpg")
        i2 (read-image-resource "i2.jpg")
        mat-blank (Mat. (Size. 600.0 600.0) 1 )
        m1 (MatOfPoint2f.)
        obj (let [o (.fromList m1 (java.util.LinkedList. img-points-list1))] m1)
        m2  (MatOfPoint2f.)
        scene (let [s (.fromList m2 (java.util.LinkedList. img-points-list2))] m2)
        H (Calib3d/findHomography   obj scene Calib3d/RANSAC 3)
        size (Size. 600.0 600.)

        mat-warped  (let [ img-warped (Imgproc/warpPerspective i1 mat-blank H size)  ] mat-blank)
        m (Mat. mat-warped (Rect. 0 0 600 600))
        test (.copyTo i2 m)]
        (Highgui/imwrite "t2.jpg" mat-warped)
          (Highgui/imwrite "m2.jpg" m)
        (println H)
        (println (.dump H))

        )


(.get (.toList (match b1 b2)) 5)


;;;
(defn good-matches [m]
  (let [result (MatOfDMatch.)
        matches (.toList m)
        dists   (map #(.distance %) matches)
        d-min (apply min dists)
        d-max (apply max dists)
        good (filter (fn [x] (<= (.distance x) (max (* 1.5 d-min) 0.018))) matches)]
    (dmatch-mat good)))

(defn match [img-a img-b]
  (let [algos {:surf {:extractor DescriptorExtractor/SURF :detector FeatureDetector/SURF}
               :orb {:extractor DescriptorExtractor/ORB :detector FeatureDetector/ORB}
               :sift {:extractor DescriptorExtractor/SIFT :detector FeatureDetector/SIFT}
               :harris-orb {:extractor DescriptorExtractor/BRIEF :detector FeatureDetector/ORB}}
        matchers {:flann DescriptorMatcher/FLANNBASED, :brute DescriptorMatcher/BRUTEFORCE}
        algo (algos :orb)
        extractor (DescriptorExtractor/create (:extractor algo))
        matcher (DescriptorMatcher/create (matchers :brute))

        kp-a (detect-keypoints img-a (:detector algo))
        kp-b (detect-keypoints img-b (:detector algo))
        desc-a (Mat.)
        desc-b (Mat.)
        matches (MatOfDMatch.)]
    (.compute extractor img-a kp-a desc-a)
    (.compute extractor img-b kp-b desc-b)
    (.match matcher desc-a desc-b matches)
    (let [good (good-matches matches)
          img-matches (Mat.)
          good-matches-vec (vec (.toList good))
          good-matches-queryIdx (map #(.queryIdx %) good-matches-vec)
          good-matches-trainIdx (map #(.trainIdx %) good-matches-vec)
          kp-a-vec (vec (.toList kp-a))
          kp-b-vec (vec (.toList kp-b))
          img-list-a (java.util.ArrayList. (map #(get kp-a-vec %) good-matches-queryIdx))
          img-list-b (java.util.ArrayList. (map #(get kp-b-vec %) good-matches-trainIdx))
          img-points-list-a (map #(.pt (get kp-a-vec %)) good-matches-queryIdx)
          img-points-list-b (map #(.pt (get kp-b-vec %)) good-matches-trainIdx)
          res1 (Mat.)
          res2 (Mat.)
          matK1 (MatOfPoint2f.)
          matK2 (MatOfPoint2f.)
          ]
          (println "queryIdx " good-matches-queryIdx " trainIdx " good-matches-trainIdx)
      (.fromList matK1 img-points-list-a)
      (.fromList matK2 img-points-list-b)
      (draw-matches! img-a kp-a img-b kp-b good img-matches)
      (Highgui/imwrite "test.jpg" img-matches)
      (Highgui/imwrite "res1.jpg" res1)
      (Highgui/imwrite "res2.jpg" res2)

      (Calib3d/findHomography   matK1 matK2 Calib3d/RANSAC 3))))


      (def mat-blank (Mat.))
      (Imgproc/warpPerspective i1 mat-blank (match i1 i2) (Size. 6000 6000))
      (def f (Mat. mat-blank (Rect. 0 0 4608 3456  )))
      (.copyTo i2 f)
      (Highgui/imwrite "f_large.jpg" mat-blank)

      (def res1 (Highgui/imread "f_large.jpg"))
      ;;; Third to stitch
      (def mat-blank (Mat.))
      (Imgproc/warpPerspective i1 mat-blank (match i1 i2) (Size. 6000 6000))
      (def f (Mat. mat-blank (Rect. 0 0 4608 3456  )))
      (.copyTo i3 f)
      (Highgui/imwrite "f_large_3.jpg" mat-blank)

      (map #(.queryIdx %) (match i1 i2))
      (map #(.trainIdx %) (match i1 i2))
