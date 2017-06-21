;; WARNING
;; The profiles.clj file is used for local environment variables, such as database credentials.
;; This file is listed in .gitignore and will be excluded from version control by Git.

{:profiles/dev  {:env {:database-url "postgresql://localhost/stitch?user=stitch&password=stitch"}}
 :profiles/test {:env {:database-url "postgresql://localhost/stitch_test?user=db_user_name_here&password=db_user_password_here"}}}
