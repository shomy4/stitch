(ns stitch.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [stitch.core-test]))

(doo-tests 'stitch.core-test)

