(ns stitch.routes.services.auth
  (:require [stitch.db.core :as db]
            [stitch.validation :refer [registration-errors]]
            [ring.util.http-response :as response]
            [buddy.hashers :as hashers]
            [clojure.tools.logging :as log]))

(defn handle-registration-error [e]
  (if (-> e (.getNextException)
            (.getMessage)
            (.startsWith "ERROR: duplicate key value"))
        (response/precondition-failed
          {:result :error
           :message "User with the selected ID already exists"}))
  (do
    (log/error e)
    (response/internal-server-error
      {:result :error
       :message "Server error occurred while adding the user"})))

(defn register! [{:keys [session]} user]
  (if (registration-errors user)
    (response/precondition-failed user)
  (try
    (db/create-user!
      (-> user
        (dissoc :pass-confirm)
        (update :pass hashers/encrypt)))
    (-> {:result :ok}
        (response/ok)
        (assoc :session (assoc session :identity (:id user))))
  (catch Exception e
    (log/error e)
    (handle-registration-error e)))))

(defn decode-auth [encoded]
  (let [auth (second (.split encoded " "))]
    (-> (.decode (java.util.Base64/getDecoder) auth)
        (String. (java.nio.charset.Charset/forName "UTF-8"))
        (.split ":" ))))

(defn authenticate [[id pass]]
  (when-let [user  (db/get-user {:id id})]
    (when (hashers/check pass (:pass user))
      id)))

(defn login! [{:keys [session]} auth]
  (if-let [id (authenticate (decode-auth auth))]
    (-> {:result :ok}
        (response/ok)
        (assoc :session (assoc session :identity id)))
    (response/unauthorized {:result :unauthorized
                            :message "Login failure"})))

(defn logout! []
  (-> {:result :ok}
      (response/ok)
      (assoc :session nil)))
