(ns stitch.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[stitch started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[stitch has shut down successfully]=-"))
   :middleware identity})
