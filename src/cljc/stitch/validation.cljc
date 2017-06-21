(ns stitch.validation
  (:require [struct.core :as st]
            [bouncer.core :as b]
            [bouncer.validators :as v]))

(defn registration-errors [{:keys [pass-confirm] :as params}]
  (first
    (b/validate
      params
      :id [[v/required :message "Username is required"]]
      :pass [[v/required :message "Password is required"]
              [v/min-count 7 :message "Password must contain at least 7 chars!"]
              [= pass-confirm :message "Passwords do not match!"]])))
