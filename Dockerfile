FROM java:8-alpine
MAINTAINER Your Name <you@example.com>

ADD target/uberjar/stitch.jar /stitch/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/stitch/app.jar"]
