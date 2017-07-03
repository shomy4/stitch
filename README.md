# stitch

Stitch is clojure web app used for stitching aerial images of.

Stitching is is the process of combining multiple photographic images with overlapping fields of view to produce a segmented panorama or high-resolution image.

Stitched image can be used for determining current state of field which again can be used for construction, farming and many other purposes.

See [wiki](https://github.com/shomy4/stitch/wiki) for details.

## Prerequisites

First thing you need to do is to install
[postgresql](https://www.postgresql.org/download/) server(9.2 + preferred).

Secondly as this project is dependent upon OpenCV you will have to install it. [This](http://docs.opencv.org/2.4/doc/tutorials/introduction/clojure_dev_intro/clojure_dev_intro.html) is a good article explaining steps required for successful installation.

## Usage

Following example shows how to use stitch functionality from
the REPL. Images *i1.jpg* and *i2.jpg* will be loaded as input images and the result of their stitching will be stored in *result.jpg*.

Image *i1.jpg*:

![i1](/doc/i1.jpg "i1.jpg")

Image *i2.jpg*:

![i2](/doc/i2.jpg "i2.jpg")

```clojure
user=> (use 'stitch.util.opencv)
nil

;; Load first image as OpenCV matrix.
user=> (def i1
  (read-image-resource "img_1.JPG"))
#'user/i1

;; Load second image as OpenCV matrix.
user=> (def i2
  (read-image-resource "img_2.JPG"))
#'user/i2

;; Performs stitching operation on these two
;; image matrices and binds the result matrix.
user=> (def result (reduce stitch [i1 i2]))
#'user/result

;; Writes the result matrix to a JPG image.
user=> (write-image "result.jpg" result)
true
```

And the result image is:

![Result image](/doc/result.jpg "Result image")

## Running

To run Web application locally run the following commands,
assuming that the [prerequisites](#prerequisites) are satisfied.

```bash
root@machine$  service postgresql start

user@machine$ lein migrate

user@machine$ lein run
...started...
```

Navigate to *http://localhost:3000*.

## License

Copyright © 2017 Milos Miletic

Distributed under Apache License Version 2.0
