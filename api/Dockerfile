FROM maven:3-jdk-11-slim AS builder
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

FROM adoptopenjdk/openjdk11:alpine-jre
COPY --from=builder app/target/api-*.jar app/app.jar
WORKDIR /app
CMD ["java", "-jar", "-Dspring.profiles.active=prod", "app.jar" ]
