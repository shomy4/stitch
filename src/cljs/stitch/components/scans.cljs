(ns stitch.components.scans
  (:require [goog.events :as gev]
            [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [stitch.components.common :as c]
            [ajax.core :as ajax]
            [clojure.string :as s])
  (:import goog.net.IframeIo
           goog.net.EventType
           [goog.events EventType]))


(defn image-modal [link]
 (fn []
   [:div
    [:img.image.panel.panel-default
     {:on-click #(session/remove! :modal)
      :src link}]
    [:div.modal-backdrop.fade.in]]))

(defn thumb-link [{:keys [name description]}]
  [:div.col-sm-4
     [:img
    {:src      (str "img/scan.jpeg" )
     :on-click #(session/put!
                  :modal
                  (image-modal
                    (str "img/scan.jpeg" )))}]
                    [:div.text-xs-center>div.btn.btn-danger name ]])

(defn gallery [links]
 [:div.text-xs-center
  (for [row (partition-all 3 links)]
    ^{:key row}
    [:div.row
     (for [link row]
       ^{:key link}
       [thumb-link link])])])

(defn forward [i pages]
 (if (< i (dec pages)) (inc i) i))

(defn back [i]
 (if (pos? i) (dec i) i))

(defn nav-link [page i]
 [:li.page-item>a.page-link.btn.btn-primary
  {:on-click #(reset! page i)
   :class    (when (= i @page) "active")}
  [:span i]])

(defn pager [pages page]
 (when (> pages 1)
   (into
     [:div.text-xs-center>ul.pagination.pagination-lg]
     (concat
       [[:li.page-item>a.page-link.btn.btn-primary
         {:on-click #(swap! page back pages)
          :class    (when (= @page 0) "disabled")}
         [:span "Â«"]]]
       (map (partial nav-link page) (range pages))
       [[:li.page-item>a.page-link.btn.btn-primary
         {:on-click #(swap! page forward pages)
          :class    (when (= @page (dec pages)) "disabled")}
         [:span "Â»"]]]))))

(defn fetch-scans! [owner]
 (ajax/GET (str "/list-scans/" owner)
           {:handler (fn [obj]
                        (session/put! :scans obj)
                        (.log js/console (clj->js obj)))}))

(defn partition-links [links]
 (when (not-empty links)
   (vec (partition-all 6 links))))

(defn scans-page []
 (let [page (atom 0)]
   (fn []
     [:div.container
      (when-let [thumbnail-links (partition-links (session/get :scans))]
        [:div.row>div.col-md-12
         [pager (count thumbnail-links) page]
         [gallery (thumbnail-links @page)]])])))