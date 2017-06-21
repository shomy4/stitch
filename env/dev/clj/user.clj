(ns user
  (:require [mount.core :as mount]
            [stitch.figwheel :refer [start-fw stop-fw cljs]]
            stitch.core))

(defn start []
  (mount/start-without #'stitch.core/repl-server))

(defn stop []
  (mount/stop-except #'stitch.core/repl-server))

(defn restart []
  (stop)
  (start))


