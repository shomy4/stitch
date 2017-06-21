(ns stitch.handler
  (:require [compojure.core :refer [routes wrap-routes]]
            [stitch.layout :refer [error-page]]
            [stitch.routes.home :refer [home-routes]]
            [stitch.routes.services :refer [service-routes restricted-service-routes]]
            [compojure.route :as route]
            [stitch.env :refer [defaults]]
            [mount.core :as mount]
            [stitch.middleware :as middleware]))

(mount/defstate init-app
                :start ((or (:init defaults) identity))
                :stop  ((or (:stop defaults) identity)))


(def app-routes
  (routes
    #'service-routes
    (wrap-routes #'restricted-service-routes middleware/wrap-auth)
    (wrap-routes #'home-routes middleware/wrap-csrf)
    (route/not-found
      (:body
        (error-page {:status 404
                     :title "page not found"})))))


(defn app [] (middleware/wrap-base #'app-routes))
