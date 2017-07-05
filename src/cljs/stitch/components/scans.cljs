(ns stitch.components.scans
  (:require [goog.events :as gev]
            [goog.dom    :as dom]
            [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [stitch.components.common :as c]
            [ajax.core :as ajax]
            [clojure.string :as s])
  (:import goog.net.IframeIo
           goog.net.EventType
           [goog.events EventType]))

(def DONE_CLASS
  "done")

(def PROCESSING_CLASS
  "processing")

(defn download-image [id]
 (set! (.-location js/document)
   (str "/download-image/" id)))

(defn update-image-thumbnail [target]
  (fn [response]
    (let [stitched (dom/getElement (str "scan_image_" (:id response)))]
    (goog.dom.setProperties
      target
      (clj->js {:src (:result  response) :class "done"}))
      (gev/listen stitched goog.events.EventType.CLICK (fn [e] (download-image (:id response))))
      (dom/removeNode  (dom/getElement "loader")))))



(defn handle-stitching [scan_id target]
  (if (= (.-className target) PROCESSING_CLASS)
    (let [loader  (dom/createDom "div" (clj->js {"id" "loader"}))]
      (dom/append (.-body js/document) loader)
      (ajax/GET (str "/stitch/?scan_id=" scan_id)
                {:handler (update-image-thumbnail target)
                 :error-handler (fn []
                                  (dom/removeNode  (dom/getElement "loader"))
                                  (js/alert "Error while stitching image"))}))))

(defn image-modal [link]
 (fn []
   [:div
    [:img.image.panel.panel-default
     {:on-click #(session/remove! :modal)
      :src link}]
    [:div.modal-backdrop.fade.in]]))

(defn thumb-link [{:keys [id status name description result]}]
  [:div.col-sm-4
    [:a.thumb
     [:img
     {:src      (if (= status 2) result (str "img/scan.jpeg" ))
     :class     (if (= status 2) DONE_CLASS PROCESSING_CLASS)
     :width "201px"
     :id (str "scan_image_" id)
     :on-click (fn [e] (if (not= status 2) (handle-stitching id (.-target e)) (download-image id)))}
     ]
     ]
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
         [:span "<"]]]
       (map (partial nav-link page) (range pages))
       [[:li.page-item>a.page-link.btn.btn-primary
         {:on-click #(swap! page forward pages)
          :class    (when (= @page (dec pages)) "disabled")}
         [:span ">"]]]))))

(defn fetch-scans! [owner]
 (ajax/GET (str "/list-scans/" owner)
           {:handler (fn [obj]
                        (session/put! :scans obj))}))

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
