(ns stitch.routes.services
  (:require [ring.util.http-response :refer :all]
            [stitch.routes.services.auth :as auth]
            [stitch.routes.services.upload-scan :as upload-scan]
            [stitch.routes.services.scans :as scans]
            [compojure.api.sweet :refer :all]
            [schema.core :as s]
            [compojure.api.upload :refer :all]
            [compojure.api.meta :refer [restructure-param]]
            [buddy.auth.accessrules :refer [restrict]]
            [buddy.auth :refer [authenticated?]]))

(defn access-error [_ _]
  (unauthorized {:error "unauthorized"}))

(defn wrap-restricted [handler rule]
  (restrict handler {:handler  rule
                     :on-error access-error}))

(defmethod restructure-param :auth-rules
  [_ rule acc]
  (update-in acc [:middleware] conj [wrap-restricted rule]))

(defmethod restructure-param :current-user
  [_ binding acc]
  (update-in acc [:letks] into [binding `(:identity ~'+compojure-api-request+)]))

(s/defschema UserRegistration
  {:id           String
   :pass         String
   :pass-confirm String})

 (s/defschema Scan
   {:id                  s/Num
    :owner               String
    :name                String
    :description         String
    :status              s/Num
    (s/optional-key :result) s/Any
    (s/optional-key :rk) s/Num})

(s/defschema Result
  {:result                   s/Keyword
  (s/optional-key :message) String})

(defapi service-routes
    {:swagger {:ui "/swagger-ui"
               :spec "/swagger.json"
               :data {:info {:version "1.0.0"
                             :title "Stitch API"
                             :description "Public Services"}}}}

    (POST "/register" req
            :return Result
            :body [user UserRegistration]
            :summary "Register a new user"
            (auth/register! req user))
    (POST "/login" req
          :header-params [authorization :- String]
          :summary "Logs in the user and returns session"
          :return Result
          (auth/login! req authorization))
    (POST "/logout" []
          :summary "Removes user session"
          :return Result
          (auth/logout!))
    (GET "/list-scans/:owner" []
       :path-params [owner :- String]
       :summary "list users scans"
       :return [Scan]
       (scans/list-scans owner)))

(defapi restricted-service-routes
  {:swagger {:ui "/swagger-ui-private"
             :spec "/swagger-private.json"
             :data  {:info {:version "1.0.0"
                            :title "Stitch API"
                            :description "Private Services"}}}}
    (POST "/upload" req
        :middleware [wrap-multipart-params]
        :summary "Handles scan upload"
        :return Result
        (upload-scan/save-scan! req )))
