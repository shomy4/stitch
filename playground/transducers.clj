(require '[clojure.java.io :as io]
         '[cheshire.core :as json])

(letfn [(rand-obj []
          (case (rand-int 3)
            0 {:type "number" :number (rand-int 1000)}
            1 {:type "string" :string (apply str (repeatedly 30 #(char (+ 33 (rand-int 90)))))}
            2 {:type "empty"}))]
  (with-open [f (io/writer "/tmp/dummy.json")]
    (binding [*out* f]
      (dotimes [_ 100000]
        (println (json/encode (rand-obj)))))))

(defn parse-json-file-lazy [file]
  (map #(json/decode % true)
       (line-seq (io/reader file))))

(take 10 (parse-json-file-lazy "/tmp/dummy.json"))

(defn valid-entry? [log-entry]
  (not= (:type log-entry) "empty"))

(defn transform-entry-if-relevant [log-entry]
  (cond (= (:type log-entry) "number")
        (let [number (:number log-entry)]
          (when (> number 900)
            (assoc log-entry :number (Math/log number))))

        (= (:type log-entry) "string")
        (let [string (:string log-entry)]
          (when (re-find #"a" string)
            (update log-entry :string str "-improved!")))))

(->> (parse-json-file-lazy "/tmp/dummy.json")
     (filter valid-entry?)
     (keep transform-entry-if-relevant)
     (take 10))

 (def db (atom 0))                ; Dummy "database"

 (defn save-into-database [batch]
   (swap! db + (count batch)))    ; Simulate inserting data into database.

   (defn process [files]
     (->> files
          (mapcat parse-json-file-lazy) ; mapcat b/c one file produces many entries
          (filter valid-entry?)
          (keep transform-entry-if-relevant)
          (partition-all 1000)          ; Form batches for saving into database.
          (map save-into-database)
          doall))                       ; Force eagerness at the end.

(time (process ["/tmp/dummy.json"]))
;; "Elapsed time: 2472.854294 msecs"

(time (process (repeat 8 "/tmp/dummy.json")))
;; "Elapsed time: 33295.152823 msecs"


(map inc (filter even? <coll>))

(sequence (comp (filter even?) (map inc)) <coll>)



(defn lines-reducible [^java.io.BufferedReader rdr]
  (reify clojure.lang.IReduceInit
    (reduce [this f init]
      (try
        (loop [state init]
          (if-let [line (.readLine rdr)]
            (recur (f state line))
            state))
        (finally (.close rdr))))))
