(ns stitch.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [stitch.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[stitch started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[stitch has shut down successfully]=-"))
   :middleware wrap-dev})
