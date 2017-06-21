(ns stitch.core
  (:require [reagent.core :as r]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [markdown.core :refer [md->html]]
            [stitch.ajax :refer [load-interceptors!]]
            [ajax.core :refer [GET POST]]
            [stitch.components.common :as c]
            [stitch.components.registration :as reg]
            [stitch.components.login :as l]
            [stitch.components.upload-scan :as u]
            [stitch.components.scans :as scans])
  (:import goog.History))

(defn nav-link [uri title page collapsed?]
  [:li.nav-item
   {:class (when (= page (session/get :page)) "active")}
   [:a.nav-link
    {:href uri
     :on-click #(reset! collapsed? true)} title]])


(defn user-menu []
 (if-let [id (session/get :identity)]
   [:ul.nav.navbar-nav.pull-xs-right
   [:li.nav-item [u/upload-button]]
    [:li.nav-item
     [:a.dropdown-item.btn
      {:on-click #(POST "/logout" {:handler (fn [] (session/remove! :identity))})}
      [:i.fa.fa-user] " " id " | sign out" ]]]
   [:ul.nav.navbar-nav.pull-xs-right
    [:li.nav-item [l/login-button]]
    [:li.nav-item [reg/registration-button]]]))

(defn navbar []
  (let [collapsed? (r/atom true)]
    (fn []
      [:nav.navbar.navbar-light.bg-faded
       [:button.navbar-toggler.hidden-sm-up
        {:on-click #(swap! collapsed? not)} "â˜°"]
       [:div.collapse.navbar-toggleable-xs
        (when-not @collapsed? {:class "in"})
        [:a.navbar-brand {:href "#/"} "stitch"]
        [:ul.nav.navbar-nav
         [nav-link "#/" "Home" :home collapsed?]
         [nav-link "#/about" "About" :about collapsed?]]
       [user-menu]]])))

(defn about-page []
  [:div "Stitcher about page. Coming soon"])

(defn galleries [gallery-links]
  [:div.text-xs-center
   (for [row (partition-all 3 gallery-links)]
     ^{:key row}
     [:div.row
      (for [{:keys [owner name]} row]
        ^{:key (str owner name)}
        [:div.col-sm-4
         [:a {:href (str "#/gallery/" owner)}
          [:img {:src (str js/context "/gallery/" owner "/" name)}]]])])])

(defn home-page []
  (scans/fetch-scans! (session/get :identity))
  (fn []
    [:div.container
     [:div.row
      [:div.col-md-12>h2 "Welcome to Stitcher"]]
       [:div.row>div.col-md-12
        [scans/scans-page]]]))



(def pages
  {:home  #'home-page
   :about #'about-page
   :scans #'scans/scans-page})

(defn modal []
  (when-let [session-modal (session/get :modal)]
    [session-modal]))

(defn page []
  [:div
    (when-let [session-modal (session/get :modal)]
      [session-modal])
   [(pages (session/get :page))]])
;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
                    (session/put! :page :home))

(secretary/defroute "/list-scans/:owner" [owner]
                    (scans/fetch-scans! owner)
                    (session/put! :page :scans))


(secretary/defroute "/about" []
                    (session/put! :page :about))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
      EventType/NAVIGATE
      (fn [event]
        (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn mount-components []
  (r/render [#'navbar] (.getElementById js/document "navbar"))
  (r/render [#'page] (.getElementById js/document "app")))

(defn init! []
  (load-interceptors!)
  (hook-browser-navigation!)
  (session/put! :identity js/identity)
  (mount-components))
